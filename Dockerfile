FROM httpd:2.4

ENV APP_PORT 80

ENV TZ=Europe/Berlin

EXPOSE 80

COPY ./ /usr/local/apache2/htdocs/
