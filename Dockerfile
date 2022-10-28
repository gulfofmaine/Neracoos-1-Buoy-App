#syntax=docker/dockerfile:1.2
FROM node:19.0.0-alpine@sha256:88f6aa846169ea75341059f3104d6c5ebeac4be861a5adcf0489fccb55573ea7 as develop

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add --no-cache git

COPY ./yarn.lock ./package.json /usr/src/app/

RUN --mount=type=cache,id=yarn,target=/usr/local/share/.cache/yarn \
    yarn install --ignore-optional

COPY . /usr/src/app

FROM develop as buildstep

ARG NEXT_PUBLIC_PROXY_ROOT
ARG NEXT_PUBLIC_ERDDAP_SERVICE

RUN yarn build

FROM nginx:1.23.2-alpine@sha256:bffb4330be734e3268087e28ca51f6ae926f7d4406c7f5b5ab50c5e22570dc32

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
