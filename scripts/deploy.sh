#!/bin/bash
# Deployment script for the application

set -e

# Configuration
ENV=${1:-prod}  # Default to production environment
COMPOSE_FILE="docker-compose.${ENV}.yml"
ENV_FILE="envs/.env.${ENV}"

# Check if the environment file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "Error: Environment file $ENV_FILE not found."
    exit 1
fi

# Check if the docker-compose file exists
if [ ! -f "$COMPOSE_FILE" ]; then
    echo "Error: Docker Compose file $COMPOSE_FILE not found."
    exit 1
fi

echo "Deploying application with $COMPOSE_FILE using $ENV_FILE..."

# Pull latest changes from git
echo "Pulling latest changes from git..."
git pull

# Build and start the containers
echo "Building and starting containers..."
docker-compose -f $COMPOSE_FILE --env-file $ENV_FILE up -d --build

echo "Deployment completed successfully!"