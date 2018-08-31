FROM node:10-alpine
COPY package.json yarn.lock ./
RUN yarn
COPY server.js index.html ./
CMD ["node", "server.js"]
