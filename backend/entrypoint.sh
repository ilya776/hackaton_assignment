#!/bin/bash
set -e

# Apply database migrations
echo "Applying database migrations..."
python manage.py makemigrations accounts
python manage.py makemigrations books
python manage.py migrate

# Start the main process
echo "Starting server..."
exec "$@"
