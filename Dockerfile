FROM node:15-alpine

RUN apk update && apk add python make g++
RUN apk add --update nodejs npm

WORKDIR /app

COPY . ./
RUN npm install
RUN npm install -g expo-cli
RUN expo install expo-location
RUN expo install react-native-maps  

EXPOSE 19006

ENTRYPOINT ["sh", "./docker/entrypoint.sh"]