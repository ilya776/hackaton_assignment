# SSL Certificates

This directory is for SSL certificates used in production.

## For Production

In production, you should replace these files with real SSL certificates from a trusted certificate authority like Let's Encrypt.

## Required Files

- `server.crt`: The SSL certificate
- `server.key`: The private key for the SSL certificate

## Generating Self-Signed Certificates for Development

For development purposes only, you can generate self-signed certificates using the following command:

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
```

**Note:** Self-signed certificates will cause browser warnings. They should never be used in production.