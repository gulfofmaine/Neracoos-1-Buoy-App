#syntax=docker/dockerfile:1.2
FROM node:18.7.0-alpine@sha256:af502799866e8044883622a66828a2536447123d9dd415f9f09e8259bc4c52ee as develop

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

FROM nginx:1.21.6-alpine@sha256:5a0df7fb7c8c03e4158ae9974bfbd6a15da2bdfdeded4fb694367ec812325d31

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
