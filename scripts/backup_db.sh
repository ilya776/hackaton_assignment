#!/bin/bash
# Database backup script

set -e

# Configuration
ENV=${1:-prod}  # Default to production environment
COMPOSE_FILE="docker-compose.${ENV}.yml"
ENV_FILE="envs/.env.${ENV}"
BACKUP_DIR="backups/$(date +%Y-%m-%d)"
TIMESTAMP=$(date +%H-%M-%S)

# Check if the environment file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "Error: Environment file $ENV_FILE not found."
    exit 1
fi

# shellcheck source=envs/.env.prod
source "$ENV_FILE"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

echo "Creating database backup for $POSTGRES_DB..."

# Create the backup
docker-compose -f "$COMPOSE_FILE" exec -T db \
  pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" -F c \
  > "$BACKUP_DIR/db_backup_${TIMESTAMP}.dump"

echo "Backup created at $BACKUP_DIR/db_backup_${TIMESTAMP}.dump"

# Optional: Remove backups older than 30 days
find backups -type f -name "*.dump" -mtime +30 -delete

echo "Backup completed successfully!"
