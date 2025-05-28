FROM node:20-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY ../../frontend/package*.json ./
RUN npm install

COPY ../../frontend .

USER appuser

CMD ["npm", "run", "dev"]