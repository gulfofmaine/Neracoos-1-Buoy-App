FROM node:15.1.0-alpine@sha256:501deada9d9443a604974c8943f1268b3ac85e746f4f2bb18b3b0a5f604a05de as develop

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

FROM nginx:1.19.2-alpine@sha256:4635b632d2aaf8c37c8a1cf76a1f96d11b899f74caa2c6946ea56d0a5af02c0c

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
