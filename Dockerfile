#syntax=docker/dockerfile:1.2
FROM node:16.9.0-alpine@sha256:697313d55634a94b36cc5cf75a687b210c7e4a8e433e64d80893bcfca9b11de8 as develop

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

FROM nginx:1.21.1-alpine@sha256:bfe377bdeb9ff37a62b49e149ac12c67a18089699bb844ce917fe3dbb834abed

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
