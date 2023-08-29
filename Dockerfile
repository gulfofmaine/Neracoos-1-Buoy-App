#syntax=docker/dockerfile:1.2
FROM node:20.5.0-alpine@sha256:efcfc9e818c3abe166cfcced1c9602cac29e08c83b273a4f280a87d4218daf8c as develop

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

FROM nginx:1.25.2-alpine@sha256:16164a43b5faec40adb521e98272edc528e74f31c1352719132b8f7e53418d70

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
