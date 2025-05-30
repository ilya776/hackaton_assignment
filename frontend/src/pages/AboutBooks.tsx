import {useParams} from "react-router";

const AboutBooks = () => {
  const { topicId } = useParams();


  return (
    <div className="container mx-auto px-4 py-8">
      <div>Тема: {topicId}</div>
      <h1 className="text-3xl font-bold text-center mb-8 text-[#3d5c3d]">Про книги</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#4d504c]">Що таке книги?</h2>
        <p className="text-gray-700 mb-4">
          Книги - це джерело знань, мудрості та натхнення. Вони відкривають перед нами нові світи, 
          розширюють наш кругозір та допомагають краще зрозуміти себе та навколишній світ.
        </p>
        <p className="text-gray-700 mb-4">
          Від стародавніх рукописів до сучасних електронних книг, література завжди була важливою 
          частиною людської культури та цивілізації.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#4d504c]">Переваги читання</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Розширення словникового запасу та покращення мовних навичок</li>
            <li>Зниження стресу та покращення психічного здоров'я</li>
            <li>Розвиток емпатії та соціальних навичок</li>
            <li>Покращення концентрації та уваги</li>
            <li>Стимуляція мозкової активності та запобігання когнітивному спаду</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#4d504c]">Популярні жанри</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Фантастика - світи, які існують лише в уяві</li>
            <li>Детектив - загадки та розслідування</li>
            <li>Романтика - історії про кохання та стосунки</li>
            <li>Пригоди - захоплюючі подорожі та випробування</li>
            <li>Наукова література - знання та відкриття</li>
            <li>Історичні романи - подорожі в минуле</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#4d504c]">Як вибрати книгу?</h2>
        <p className="text-gray-700 mb-4">
          Вибір книги - це особистий процес, який залежить від ваших інтересів, настрою та цілей. 
          Ось кілька порад, які можуть допомогти:
        </p>
        <ol className="list-decimal pl-5 text-gray-700 space-y-2">
          <li>Визначте свої інтереси та цілі читання</li>
          <li>Прочитайте анотацію та відгуки</li>
          <li>Зверніть увагу на автора та його стиль</li>
          <li>Проконсультуйтеся з друзями або книжковими блогерами</li>
          <li>Відвідайте книгарню або бібліотеку для особистого знайомства з книгою</li>
        </ol>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-[#4d504c]">Цитати про книги</h2>
        <blockquote className="border-l-4 border-[#3d5c3d] pl-4 italic text-gray-700 mb-4">
          "Книга - це мрія, яку ти тримаєш в руках." - Ніл Гейман
        </blockquote>
        <blockquote className="border-l-4 border-[#3d5c3d] pl-4 italic text-gray-700 mb-4">
          "Читання - це розмова з найкращими людьми минулих століть." - Рене Декарт
        </blockquote>
        <blockquote className="border-l-4 border-[#3d5c3d] pl-4 italic text-gray-700">
          "Кімната без книг - це тіло без душі." - Цицерон
        </blockquote>
      </div>
    </div>
  );
};

export default AboutBooks;