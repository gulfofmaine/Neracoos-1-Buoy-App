FROM node:10.6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g cordova ionic

COPY ./package.json /usr/src/app/package.json

RUN npm install

COPY . /usr/src/app

CMD ionic serve

EXPOSE 8100 35729