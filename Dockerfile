## Nextjs Docker-file


## Base image
FROM node:16.15.1-alpine3.14

RUN mkdir -p /usr/src/app
ENV PORT 3000

## set working directory and copy the app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app


# Production use node instead of root
# USER node

RUN yarn install --production

COPY . /usr/src/app

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]

