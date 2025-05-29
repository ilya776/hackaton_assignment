import requests
from bs4 import BeautifulSoup
from decimal import Decimal
from django.core.management.base import BaseCommand
from books.models import Book

RATING_MAP = {
    'One': 1,
    'Two': 2,
    'Three': 3,
    'Four': 4,
    'Five': 5,
}


class Command(BaseCommand):
    help = 'Parse books from https://books.toscrape.com/ and save/update to DB'

    BASE_URL = 'https://books.toscrape.com/'

    def handle(self, *args, **kwargs):
        page_url = self.BASE_URL + 'catalogue/page-1.html'

        while page_url:
            self.stdout.write(f'Parsing page: {page_url}')
            resp = requests.get(page_url)
            soup = BeautifulSoup(resp.text, 'html.parser')

            books = soup.select('article.product_pod')
            for book in books:
                # Силка на деталі книги
                rel_link = book.select_one('h3 a')['href']
                book_url = self.BASE_URL + 'catalogue/' + rel_link.replace('../../../', '')

                book_resp = requests.get(book_url)
                book_soup = BeautifulSoup(book_resp.text, 'html.parser')

                # Збір даних
                title = book_soup.select_one('div.product_main h1').text.strip()

                price_tag = book_soup.select_one('p.price_color')

                if price_tag:
                    try:
                        price_text = price_tag.text.strip().replace('£', '').strip()
                        price = Decimal(price_text)
                    except Exception as e:
                        self.stdout.write(
                            self.style.ERROR(f'Invalid price for book "{title}": {price_tag.text.strip()}'))
                        price = Decimal('0.00')
                    else:
                        self.stdout.write(self.style.WARNING(f'No price found for "{title}"'))
                        price = Decimal('0.00')

                description_tag = book_soup.select_one('#product_description')
                if description_tag:
                    description = description_tag.find_next_sibling('p').text.strip()
                else:
                    description = ''

                # Рейтинг
                rating_class = book_soup.select_one('p.star-rating')['class']
                rating_word = [cls for cls in rating_class if cls != 'star-rating'][0]
                rating = RATING_MAP.get(rating_word, 0)

                # Зображення
                image_rel = book_soup.select_one('div.carousel-inner img')['src']
                image_url = self.BASE_URL + image_rel.replace('../../', '')

                # Жанр
                genre = book_soup.select('ul.breadcrumb li a')[2].text.strip()

                # Створення або оновлення запису
                book_obj, created = Book.objects.update_or_create(
                    title=title,
                    defaults={
                        'price': price,
                        'description': description,
                        'rating': rating,
                        'image': image_url,
                        'genre': genre,
                    }
                )
                if created:
                    self.stdout.write(f'Created: {title}')
                else:
                    self.stdout.write(f'Updated: {title}')

            # Пагінація
            next_button = soup.select_one('li.next a')
            if next_button:
                next_page = next_button['href']
                # Формуємо повний URL для наступної сторінки
                page_url = self.BASE_URL + 'catalogue/' + next_page
            else:
                page_url = None
