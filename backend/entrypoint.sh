#!/bin/bash
set -e

# Apply database migrations
echo "Applying database migrations..."
python manage.py makemigrations accounts
python manage.py migrate

# Run the book parser
echo "Parsing books from website..."
python manage.py parse_books

# Start the main process
echo "Starting server..."
exec "$@"
