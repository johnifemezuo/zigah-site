FROM node:14

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 9009

CMD ["yarn", "start"]
