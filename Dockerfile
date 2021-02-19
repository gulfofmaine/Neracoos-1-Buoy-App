FROM node:15.9.0-alpine@sha256:426bc9302c1c6ba34c9e7d5adabafe25d696a3d2845fb0cf6e333acd9567dfca as develop

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

FROM develop as buildstep

ARG REACT_APP_PROXY_ROOT
ARG REACT_APP_ERDDAP_SERVICE

RUN yarn build

FROM nginx:1.19.7-alpine@sha256:14536d83ca3128923ee7c2f7f4f285e023abd40f3ccdc8911f56cd4119558506

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
