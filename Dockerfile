#syntax=docker/dockerfile:1.2
FROM node:15.13.0-alpine@sha256:fc24d15ecf126b8e6dd954198159407261a780c7684b944c8556f5ddb8bee580 as develop

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

FROM nginx:1.19.10-alpine@sha256:43aee115b798c2e923473f22e08c7abd715ad252262953f7da1c6a13f8c5a5c8

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
