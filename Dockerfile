FROM node:16.20.2

WORKDIR /programming-lang-display
EXPOSE 8080
ENV PORT 8080
COPY . .
RUN npm i
ENTRYPOINT npm start