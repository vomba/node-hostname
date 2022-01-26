FROM node:alpine

WORKDIR /app


COPY . .

RUN npm install 

EXPOSE 3000

USER 3000

CMD npm start