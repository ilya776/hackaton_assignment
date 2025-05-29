# Database Directory

This directory is used for database-related files and data persistence.

## Purpose

The `db/` directory serves as a mount point for PostgreSQL data volumes in development and as a location for database initialization scripts, migrations, and backups.

## Contents

- **data/**: PostgreSQL data files (mounted as a volume in docker-compose)
- **init/**: Database initialization scripts (run when the database container is first created)
- **backups/**: Database backup files (created by the backup script)

## Usage

### Database Initialization

Place SQL scripts in the `init/` directory to initialize the database when the container is first created. These scripts will be executed in alphabetical order.

Example:
```sql
-- init/01-create-tables.sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);
```

### Database Backups

Database backups are created by the `scripts/backup_db.sh` script and stored in the `backups/` directory.

To create a backup:
```bash
./scripts/backup_db.sh
```

To restore a backup:
```bash
docker-compose exec db pg_restore -U <username> -d <dbname> -c /path/to/backup.dump
```

## Notes

- The PostgreSQL data files are stored in a Docker volume, not directly in this directory
- This directory is primarily for organization and documentation purposes
- In production, consider using a managed database service instead of a containerized database