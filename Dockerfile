# GOAL: have code that can run directly
FROM node:20-alpine as builder

RUN npm install -g pnpm

WORKDIR /app

COPY package.json ./package.json
COPY pnpm-lock.yaml ./pnpm-lock.yaml
COPY .env.production ./.env.production

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

RUN echo "Builder step"

RUN ls ./.next -la

#GOAL: remove reduntly file
FROM node:20-alpine as runner

RUN npm install -g pnpm

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/.next ./.next

RUN echo "Runner step"

RUN ls ./.next -la

RUN pnpm install --prod --frozen-lockfile

EXPOSE 3000

CMD ["pnpm", "start"]