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

FROM nginx:1.19.5-alpine@sha256:210a2ddbc64ef162913f6e1d81fdc29efed14f35aa77716ab5e952959833c831

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
