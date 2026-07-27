FROM node:18-alpine
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm ci --only=production

# copy source
COPY . .

ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001
CMD [ "node", "server.js" ]
