FROM node:20-alpine
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# copy source
COPY . .

ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001
CMD [ "node", "server.js" ]
