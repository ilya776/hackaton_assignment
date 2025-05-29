-- Enable necessary PostgreSQL extensions

-- UUID extension for generating UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- pgcrypto for cryptographic functions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- hstore for key-value pairs
CREATE EXTENSION IF NOT EXISTS "hstore";

-- ltree for hierarchical data
CREATE EXTENSION IF NOT EXISTS "ltree";

-- pg_trgm for text similarity search
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- unaccent for accent-insensitive search
CREATE EXTENSION IF NOT EXISTS "unaccent";
