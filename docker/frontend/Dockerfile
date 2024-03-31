FROM node:21-alpine as base

WORKDIR /app

COPY . .

RUN ls

RUN npm install

ENV NODE_ENV=development

ENTRYPOINT [ "npm", "run", "dev" ]