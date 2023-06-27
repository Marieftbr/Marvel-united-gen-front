FROM node:18

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm i

COPY public /app/public
COPY src /app/src

RUN npm run build

FROM nginx:latest

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /app
COPY --from=0 /app/build /app/build
