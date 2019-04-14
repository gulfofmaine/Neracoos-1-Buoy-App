FROM cypress/base:10@sha256:ed987a820ee764bc605c3026d1b00523b16c874735246aa3e27ece9faa6965a7

WORKDIR /test

COPY ./package.json /test/package.json
COPY ./yarn.lock /test/yarn.lock

RUN yarn
# RUN npm install

# RUN $(npm bin)/cypress run
