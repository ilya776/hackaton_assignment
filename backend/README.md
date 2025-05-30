# Backend API

This is the Django backend API for the project. It provides authentication and user management endpoints.

## Setup

1. Make sure you have Docker and Docker Compose installed
2. Run the following command to start the backend:

```bash
docker-compose up
```

## API Endpoints

### Authentication

- **Register**: `POST /api/auth/register/`
  - Request body: `{ "email": "user@example.com", "password": "password", "name": "User Name" }`
  - Response: `{ "user": { "id": 1, "email": "user@example.com", "name": "User Name", "genre": "" }, "tokens": { "refresh": "token", "access": "token" } }`

- **Login**: `POST /api/auth/login/`
  - Request body: `{ "email": "user@example.com", "password": "password" }`
  - Response: `{ "tokens": { "refresh": "token", "access": "token" } }`

- **Refresh Token**: `POST /api/auth/token/refresh/`
  - Request body: `{ "refresh": "token" }`
  - Response: `{ "access": "token" }`

### User Management

- **Get User Details**: `GET /api/auth/me/`
  - Headers: `Authorization: Bearer <access_token>`
  - Response: `{ "id": 1, "email": "user@example.com", "name": "User Name", "genre": "Fantasy" }`

- **Update User Details**: `PUT /api/auth/me/`
  - Headers: `Authorization: Bearer <access_token>`
  - Request body: `{ "name": "New Name", "email": "new@example.com", "genre": "Science Fiction" }`
  - Response: `{ "id": 1, "email": "new@example.com", "name": "New Name", "genre": "Science Fiction" }`

## Email Testing

The project uses MailHog for email testing. You can access the MailHog web interface at http://localhost:8025 to view sent emails.

## Admin Interface

The Django admin interface is available at http://localhost:8000/admin. You can log in with the superuser credentials defined in the .env.dev file.