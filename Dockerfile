# --- Этап 1: сборка React ---
FROM node:24-alpine AS front-build

WORKDIR /front

COPY front/package*.json ./
RUN npm ci

COPY front/ ./
RUN npm run build

# --- Этап 2: сборка server + static ---
FROM node:24-alpine

WORKDIR /app

COPY server/package*.json ./
RUN npm ci --only=production

COPY server/ ./
COPY --from=front-build /front/dist ./public

EXPOSE 3000

# В Alpine нет пользователя `node` по умолчанию, создаем его
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

CMD ["node", "src/server.js"]