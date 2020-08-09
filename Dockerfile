FROM node:alpine

WORKDIR /app

COPY ./yarn.lock .

RUN yarn

COPY . .

EXPOSE ${PORT}

CMD yarn up
