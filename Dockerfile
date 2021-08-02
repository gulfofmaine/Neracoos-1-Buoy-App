#syntax=docker/dockerfile:1.2
FROM node:16.6.0-alpine@sha256:a55cd676d1aec59d871855b86984063c8854e67a7f552af66418c5068103a509 as develop

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

FROM nginx:1.21.1-alpine@sha256:e22b3ba90be2990777d7d865ec13cb2ac1ebe1c9aa4828b373dae26624191646

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
