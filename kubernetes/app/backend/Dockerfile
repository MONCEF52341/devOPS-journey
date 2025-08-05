FROM node:22-slim
WORKDIR /app
COPY package*.json ./
RUN npm i -g pnpm
RUN pnpm i
COPY . .
EXPOSE 5000
CMD ["npm", "start"]