# Single-stage Dockerfile: build and run in the same image
FROM node:24-alpine
WORKDIR /app

# Copy package files first so Docker can cache the install step
COPY package*.json ./
RUN npm ci

# Copy the source and compile TypeScript into dist/
COPY . .
RUN npm run build

# Remove dev packages now that the build is done (smaller image)
RUN npm prune --omit=dev


EXPOSE 3000
CMD ["node", "dist/main"]