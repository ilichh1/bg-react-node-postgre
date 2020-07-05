FROM node:12.18.2-alpine3.12

WORKDIR /usr/src/app

# Copiamos nuestros archivos que hacen la API, a donde la imagen los corre por default
COPY . /usr/src/app/

RUN npm install --slient

# El default es: EXPOSE 8888
EXPOSE 8080

CMD ["app.js"]