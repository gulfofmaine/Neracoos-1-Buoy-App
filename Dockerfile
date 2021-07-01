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

FROM nginx:1.21.0-alpine@sha256:cc8c413c74aba9fef9dae7f3da736725136bad1e3f24fbc93788aea1944f51c4

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
