## Security Recommendations

To ensure the security of sensitive data and configurations:

1. **Do not share `.env` files publicly**:
    - Always add `.env` files or the `/envs` directory to your `.gitignore` file to prevent accidental commits.

2. **Use a secrets management service**:
    - For production environments, consider using a tool like AWS Secrets Manager, HashiCorp Vault, or
      environment-specific secret solutions offered by major cloud providers.

3. **Restrict access**:
    - Limit access to `.env` files to only those individuals or services that absolutely require it.

4. **Avoid hardcoding**:
    - Never hardcode sensitive values like API keys, database credentials, or tokens directly in the codebase. Use
      environment variables instead to load them dynamically.

## References

- [dotenv documentation](https://github.com/motdotla/dotenv)
- [Environment Configuration in Node.js](https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs)
- [Managing Secrets in CI/CD](https://www.redhat.com/en/topics/devops/what-is-ci-cd)

With proper management, environment files in the `/envs` folder help streamline configuration and deployment workflows
while maintaining security and scalability.