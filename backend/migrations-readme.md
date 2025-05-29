# Django Migrations in Docker

This document explains how migrations are handled in this project and provides best practices for both development and production environments.

## Current Setup

The project is configured to automatically run migrations when the backend container starts. This is done through an `entrypoint.sh` script that:

1. Runs `python manage.py makemigrations accounts` to create any necessary migrations for the accounts app
2. Runs `python manage.py migrate` to apply all migrations to the database
3. Starts the main application process

## Development vs. Production

### Development

For development, automatically running migrations on container startup is convenient because:
- It ensures the database schema is always up-to-date
- Developers don't need to manually run migrations after pulling changes
- It simplifies the development workflow

### Production

For production, there are some considerations:

1. **Automatic migrations can be risky:**
   - Migrations might fail and prevent the application from starting
   - Some migrations might be long-running and cause downtime
   - Running `makemigrations` in production is generally not recommended

2. **Recommended production approach:**
   - Create migrations during the CI/CD process or development
   - Apply migrations as a separate step before deploying new application code
   - Use a migration strategy that minimizes downtime (e.g., zero-downtime migrations)
   - Consider using a separate command for migrations rather than the entrypoint script

3. **Production entrypoint modifications:**
   - Remove the `makemigrations` command
   - Consider making migrations optional with an environment variable
   - Add health checks to ensure the application only receives traffic after migrations are complete

## Example Production Entrypoint

```bash
#!/bin/bash
set -e

# Apply database migrations if enabled
if [ "$DJANGO_APPLY_MIGRATIONS" = "true" ]; then
    echo "Applying database migrations..."
    python manage.py migrate --noinput
fi

# Start the main process
echo "Starting server..."
exec "$@"
```

## Security Considerations

1. **Database User Permissions:**
   - In development, the database user needs permissions to create and modify tables
   - In production, consider using a more restricted user for the application
   - Migrations might require a separate user with higher privileges

2. **Migration Content:**
   - Review migrations before applying them in production
   - Be cautious with data migrations that might affect production data
   - Test migrations on a staging environment first

## Best Practices

1. **Version Control:**
   - Always commit migration files to version control
   - Review migration files during code review

2. **Testing:**
   - Test migrations as part of your CI/CD pipeline
   - Include tests that verify the migrations work correctly

3. **Deployment:**
   - Consider using a blue-green deployment strategy for zero-downtime migrations
   - Have a rollback plan for failed migrations
   - Document any manual steps required for complex migrations

4. **Monitoring:**
   - Monitor migration execution time
   - Set up alerts for failed migrations
   - Keep track of the current migration state in each environment