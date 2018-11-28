FROM cypress/base:10

WORKDIR /test

COPY ./package.json /test/package.json
COPY ./yarn.lock /test/yarn.lock

RUN yarn
# RUN npm install

# RUN $(npm bin)/cypress run
