FROM node:18.18-alpine
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npmmirror.com \
    && npm run build
EXPOSE 7000
CMD node dist/index.js