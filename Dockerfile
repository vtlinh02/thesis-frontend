# GOAL: have code that can run directly
FROM node:20-alpine as builder

WORKDIR /app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./.env.production ./.env.production

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

#GOAL: remove reduntly file
FROM node:20-alpine as runner

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.next ./.next

RUN yarn install --production=true --frozen-lockfile

EXPOSE 3000

CMD ["yarn", "start"]