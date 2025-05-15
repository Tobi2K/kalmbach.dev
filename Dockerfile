FROM node:14

ENV APP_PORT 8080

ENV TZ=Europe/Berlin

ARG POST
ENV POST=${POST}

EXPOSE 8080

WORKDIR /usr/src/web

COPY package.json .
COPY . .

RUN npm install --loglevel notice --unsafe-perm

RUN npm run build

RUN npm run generate

CMD [ "npm", "run", "start" ]
