FROM httpd:2.4

ENV APP_PORT 8080

ENV TZ=Europe/Berlin

EXPOSE 8080

WORKDIR /usr/src/web

COPY package.json .
COPY . .

RUN npm install --loglevel notice --unsafe-perm

RUN npm run build

CMD [ "npm", "run", "start" ]
