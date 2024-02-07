FROM node:18

WORKDIR /cardboard

COPY package.json /cardboard/

RUN npm config set strict-ssl false
RUN npm install

COPY public/ /cardboard/public
COPY src/ /cardboard/src

CMD ["npm", "start"]