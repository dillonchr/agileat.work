FROM mhart/alpine-node:10.7.0
RUN npm i -g serve
WORKDIR /code/
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build --production
CMD serve -s build
EXPOSE 5000
