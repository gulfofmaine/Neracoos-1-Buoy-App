#syntax=docker/dockerfile:1.2
FROM node:15.12.0-alpine@sha256:db69f458cc1e4773fa1d8075a5024aeb50958550c608b059c4feb43f026c1c3c as develop

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

FROM nginx:1.19.7-alpine@sha256:14536d83ca3128923ee7c2f7f4f285e023abd40f3ccdc8911f56cd4119558506

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
