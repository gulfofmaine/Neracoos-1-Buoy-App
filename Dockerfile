#syntax=docker/dockerfile:1.2
FROM node:15.11.0-alpine@sha256:c01b5723b62c031744743b9641cad56b41b1d93fadee897443a5d7cca744bb5f as develop

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN --mount=type=cache,id=yarn,target=/usr/local/share/.cache/yarn \
    yarn install --ignore-optional

COPY . /usr/src/app

FROM develop as buildstep

ARG REACT_APP_PROXY_ROOT
ARG REACT_APP_ERDDAP_SERVICE

RUN yarn build

FROM nginx:1.19.8-alpine@sha256:e20c21e530f914fb6a95a755924b1cbf71f039372e94ac5ddcf8c3b386a44615

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
