FROM nginx:1.25-alpine

# Create a non-root user for nginx
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf
COPY .htpasswd /etc/nginx/.htpasswd
COPY conf.d/default.conf /etc/nginx/conf.d/default.conf

# Set proper permissions
RUN chown -R appuser:appgroup /etc/nginx/conf.d && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    chown -R appuser:appgroup /etc/nginx/.htpasswd && \
    touch /var/run/nginx.pid && \
    chown -R appuser:appgroup /var/run/nginx.pid

# Create directory for SSL certificates
RUN mkdir -p /etc/nginx/certs && \
    chown -R appuser:appgroup /etc/nginx/certs

# Switch to non-root user
USER appuser

# Expose ports
EXPOSE 80 443

# Set healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -q --spider http://localhost:80/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
