FROM cypress/base:10@sha256:eb66cc71d59892ed7e0470410045e0db7146b885202e5ade7adaec109d55c395

WORKDIR /test

COPY ./package.json /test/package.json
COPY ./yarn.lock /test/yarn.lock

RUN yarn
# RUN npm install

# RUN $(npm bin)/cypress run
