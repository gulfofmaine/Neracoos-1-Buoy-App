#syntax=docker/dockerfile:1.2
FROM node:19.8.1-alpine@sha256:ce9dd01fefe302dce994c07fb32b55403a79acd693c9d841571dc14fc47826c8 as develop

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

FROM nginx:1.23.2-alpine@sha256:455c39afebd4d98ef26dd70284aa86e6810b0485af5f4f222b19b89758cabf1e

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
