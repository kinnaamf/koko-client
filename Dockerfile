FROM node:latest as build

WORKDIR /web

COPY . .

RUN rm -rf node_modules

RUN npm i

RUN npm run build

FROM ubuntu:latest as prod

RUN apt-get update
RUN apt-get install curl -y
RUN apt-get install vim -y

ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get install apache2 -y

WORKDIR var/www/html

COPY --from=build /web/dist .

CMD ["apachectl", "-D", "FOREGROUND"]