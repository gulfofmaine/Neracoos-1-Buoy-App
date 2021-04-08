#syntax=docker/dockerfile:1.2
FROM node:15.14.0-alpine@sha256:00e87cb9f5cbb4943c55d97c2115c1b6cd1d3dc5dbc641751ebe94b25d0746e3 as develop

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

FROM nginx:1.19.9-alpine@sha256:d942e5263869b00ed3174fb76573165dc89e391bfafa43e9134a9c6e0bf0ec87

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
