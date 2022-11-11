#syntax=docker/dockerfile:1.2
FROM node:19.0.0-alpine@sha256:1a04e2ec39cc0c3a9657c1d6f8291ea2f5ccadf6ef4521dec946e522833e87ea as develop

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

FROM nginx:1.23.2-alpine@sha256:e3b7de64c2a13907d66852362fed3b42a440165351a3af42e374e0c2cd12593b

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
