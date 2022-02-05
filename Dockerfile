FROM httpd:2.4

ENV APP_PORT 8080

ENV TZ=Europe/Berlin

EXPOSE 8080

COPY ./ /usr/local/apache2/htdocs/
