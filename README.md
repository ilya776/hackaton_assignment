# Hackathon Project

A production-ready project that uses Docker, Django, Vite, MailHog, and Nginx.

## Project Structure

```
.
├── backend/             # Django backend
├── certs/               # SSL certificates (for development only)
├── ci/                  # CI/CD templates
├── config/              # Configuration files for deployment
├── envs/                # Environment variables
│   ├── .env.dev         # Development environment variables
│   └── .env.prod        # Production environment variables
├── frontend/            # Vite frontend
├── mailhog/             # MailHog for email testing
├── nginx/               # Nginx configuration
│   ├── conf.d/          # Nginx site configurations
│   └── nginx.conf       # Main Nginx configuration
└── scripts/             # Utility scripts
    ├── backup_db.sh     # Database backup script
    └── deploy.sh        # Deployment script
```

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Git

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hackathon.git
   cd hackathon
   ```

2. Start the development environment:
   ```bash
   docker-compose up -d
   ```

3. Access the services:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000/api
   - MailHog: http://localhost:8025

### Production Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hackathon.git
   cd hackathon
   ```

2. Update the production environment variables:
   ```bash
   cp envs/.env.prod.example envs/.env.prod
   # Edit envs/.env.prod with your production settings
   ```

3. Start the production environment:
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

## Database Migrations

The project is configured to automatically run database migrations when the backend container starts.

### Development

In development, the backend container will:
1. Run `python manage.py makemigrations accounts` to create migrations
2. Run `python manage.py migrate` to apply migrations
3. Start the Django development server

This ensures your database schema is always up-to-date during development.

### Production

In production, migrations are controlled by environment variables:

- `DJANGO_APPLY_MIGRATIONS`: Set to `true` to automatically apply migrations (default: `false`)
- `DJANGO_COLLECT_STATIC`: Set to `true` to automatically collect static files (default: `false`)
- `DJANGO_WAIT_FOR_MIGRATIONS`: Set to `true` to wait for migrations to complete if they're being run separately (default: `false`)

These settings can be configured in the `docker-compose.prod.yml` file:

```yaml
environment:
  - DJANGO_APPLY_MIGRATIONS=true
  - DJANGO_COLLECT_STATIC=true
```

For more information about migrations, see `backend/migrations-readme.md`.

## Environment Variables

The project uses environment variables for configuration. These are stored in the `envs/` directory:

- `.env.dev`: Development environment variables
- `.env.prod`: Production environment variables

## SSL Certificates

### Development

For development, self-signed certificates are provided in the `certs/` directory. These are not suitable for production use.

To generate new self-signed certificates:

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout certs/server.key -out certs/server.crt
```

### Production

For production, you should use real SSL certificates from a trusted certificate authority like Let's Encrypt.

**Important:** Never commit production SSL certificates to the repository. Instead, they should be:

1. Generated during deployment
2. Stored securely in a secret manager
3. Mounted as volumes at runtime

## Utility Scripts

The `scripts/` directory contains utility scripts for common tasks:

- `deploy.sh`: Deployment script
- `backup_db.sh`: Database backup script

## CI/CD Setup

### GitLab CI/CD

This project includes a `.gitlab-ci.yml` file for automatic deployment to your server. To set it up:

1. In your GitLab project, go to **Settings > CI/CD > Variables**

2. Add the following variables:
   - `SSH_PRIVATE_KEY`: The content of your SSH private key (from `lntu-student.pem`)
   - `SSH_KNOWN_HOSTS`: The SSH fingerprint of your server (run `ssh-keyscan 18.197.176.80` to get it)

3. Ensure your server has the project repository cloned at `/home/ubuntu/hacathon`

4. Push to the `main` branch to trigger the deployment pipeline

The deployment process will:
- Connect to your server at 18.197.176.80
- Pull the latest code
- Rebuild and restart the Docker containers
- Clean up unused Docker images

### CI/CD Templates

The `ci/` directory contains templates for CI/CD pipelines:

- `gitlab-ci-template.yml`: GitLab CI/CD template
- `github-actions-template.yml`: GitHub Actions template

## Contributing

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:
   ```bash
   git commit -m "Add your feature"
   ```

3. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a pull request
``