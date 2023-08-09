#syntax=docker/dockerfile:1.2
FROM node:20.5.0-alpine@sha256:59ecf4c430fc6e15b3e6f2ee3ae8fa9773b2508856baf376fcd9ad7b1e6934a9 as develop

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

FROM nginx:1.25.1-alpine@sha256:647c5c83418c19eef0cddc647b9899326e3081576390c4c7baa4fce545123b6c

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
