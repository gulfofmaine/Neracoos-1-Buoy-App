#syntax=docker/dockerfile:1.2
FROM node:16.6.2-alpine@sha256:2d7a22f6d738af0dc829d181e8a95d6239460a185f2dafee531b3c79b6c9334c as develop

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

FROM nginx:1.21.1-alpine@sha256:f5c8441e8254e8ecb5e8bb319c27805fe6a6ea0d489a95bb45f4208db633b38a

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
