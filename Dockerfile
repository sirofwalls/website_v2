FROM node AS build

WORKDIR /usr/src

COPY . .

RUN npm install

RUN cd frontend && npm install && npm run build

EXPOSE 5000

CMD ["npm", "run", "start"]