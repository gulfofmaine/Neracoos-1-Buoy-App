FROM node:15.3.0-alpine@sha256:98c899a40aed3f8bb1a042b45350aa873e533aef8f512d840e363326c2a184fc as develop

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

FROM develop as buildstep

ARG REACT_APP_PROXY_ROOT
ARG REACT_APP_ERDDAP_SERVICE

RUN yarn build

FROM nginx:1.19.6-alpine@sha256:69286bc97490a90a3dbbc2a8f6e734336f929f92b8627ad3102c411cc9bcb820

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
