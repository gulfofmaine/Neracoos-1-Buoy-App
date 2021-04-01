#syntax=docker/dockerfile:1.2
FROM node:15.12.0-alpine@sha256:e810cbc3cdddd9b43bd1feb2cbf1c4536d3c7e388cbeb86dce18f7b68977e724 as develop

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

FROM nginx:1.19.9-alpine@sha256:a033d30ab2c1183a8b865f5ac3d56b10593421340298b89cc7b81ec9d6a4c2ce

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
