FROM node:14

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ENV KMB_REACT_BASE_URL = http://localhost:8080/api

EXPOSE 3000

CMD ["npm", "start"]