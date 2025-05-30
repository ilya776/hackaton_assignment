#!/bin/bash
set -e

# Apply database migrations if enabled (default to false for safety)
if [ "${DJANGO_APPLY_MIGRATIONS:-false}" = "true" ]; then
    echo "Applying database migrations..."
    python manage.py migrate --noinput
    
    # Optional: Run collectstatic if needed
    if [ "${DJANGO_COLLECT_STATIC:-false}" = "true" ]; then
        echo "Collecting static files..."
        python manage.py collectstatic --noinput
    fi
else
    echo "Skipping automatic migrations. Set DJANGO_APPLY_MIGRATIONS=true to apply."
fi

# Wait for migrations to complete if running separately
if [ "${DJANGO_WAIT_FOR_MIGRATIONS:-false}" = "true" ]; then
    echo "Waiting for migrations to complete..."
    python -c "
import time
import django
django.setup()
from django.db.migrations.executor import MigrationExecutor
from django.db import connections

connection = connections['default']
executor = MigrationExecutor(connection)

# Wait until there are no migrations to apply
while executor.migration_plan(executor.loader.graph.leaf_nodes()):
    print('Waiting for migrations to be applied...')
    time.sleep(5)

print('All migrations have been applied!')
"
fi

# Run book parser before starting the server
echo "Parsing books from website..."
python manage.py parse_books

# Start the main process
echo "Starting server..."
exec "$@"
