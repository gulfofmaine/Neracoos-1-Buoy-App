#syntax=docker/dockerfile:1.2
FROM node:16.8.0-alpine@sha256:1ee1478ef46a53fc0584729999a0570cf2fb174fbfe0370edbf09680b2378b56 as develop

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

FROM nginx:1.21.1-alpine@sha256:8adf52321abdb31a00ce98888d4ac5e32fdeeabed0862ef2ff738618a38bdffc

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
