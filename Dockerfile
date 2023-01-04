FROM node:14.19-alpine

WORKDIR /app

RUN yarn set version berry && yarn set version canary