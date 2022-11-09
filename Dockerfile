#syntax=docker/dockerfile:1.2
FROM node:19.0.1-alpine@sha256:00c5c0850a48bbbf0136f1c886bad52784f9816a8d314a99307d734598359ed4 as develop

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

FROM nginx:1.23.2-alpine@sha256:2452715dd322b3273419652b7721b64aa60305f606ef7a674ae28b6f12d155a3

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
