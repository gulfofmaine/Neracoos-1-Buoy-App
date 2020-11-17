FROM node:15.2.1-alpine@sha256:f434de99816d20b754b440afbfaa9a21408dd5e860ebdf0eecdbbb95fb27b66a as develop

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

FROM nginx:1.19.4-alpine@sha256:f9ddfb3fd9590a3b6ba095939b7a5aee110a6fb397922e2684d6e189e78329c9

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
