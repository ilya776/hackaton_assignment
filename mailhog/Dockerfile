FROM alpine:3.18

# Create a non-root user to run the application
RUN addgroup -S mailhog && adduser -S -G mailhog mailhog

# Install MailHog
RUN apk --no-cache add ca-certificates \
    && wget -q https://github.com/mailhog/MailHog/releases/download/v1.0.1/MailHog_linux_amd64 -O /usr/local/bin/MailHog \
    && chmod +x /usr/local/bin/MailHog

# Set working directory
WORKDIR /home/mailhog

# Expose UI and SMTP ports
EXPOSE 8025 1025

# Set healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -q --spider http://localhost:8025/api/v2/messages || exit 1

# Switch to non-root user
USER mailhog

# Set read-only filesystem for security
# Note: MailHog needs write access to /tmp for temporary storage
VOLUME ["/tmp"]

# Run MailHog
ENTRYPOINT ["/usr/local/bin/MailHog"]
