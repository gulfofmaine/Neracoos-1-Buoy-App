FROM node:15.7.0-alpine@sha256:eb8794a98c891cae0506a84c699831ecd9454b923f681261c5d33d95928ea1dd as develop

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
