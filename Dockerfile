FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .

RUN npm run build

# Production image
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 1337

CMD ["npm", "run", "start"]

