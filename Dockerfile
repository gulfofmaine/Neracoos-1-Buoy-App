#syntax=docker/dockerfile:1.2
FROM node:15.12.0-alpine@sha256:3d57223cc3ba9bb3399129f14d207b7f7a3485213ee0211c54adc757cf35dd0a as develop

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add --no-cache git

COPY ./yarn.lock ./package.json /usr/src/app/

RUN --mount=type=cache,id=yarn,target=/usr/local/share/.cache/yarn \
    yarn install --ignore-optional

COPY . /usr/src/app

FROM develop as buildstep

ARG REACT_APP_PROXY_ROOT
ARG REACT_APP_ERDDAP_SERVICE

RUN yarn build

FROM nginx:1.19.9-alpine@sha256:dcb917cfe53d7901c07892d676a3b1b6c4b3ee75e5308f27e0345e8aaf30617e

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
