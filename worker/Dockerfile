FROM node:alpine

WORKDIR /app

COPY ./pakcage.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]