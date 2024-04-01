FROM node:12.1-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm cache clean && npm --update-checksums
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]