# Intermediate docker image to build the bundle and install dependencies
FROM node:lts-alpine as build
# Set the working directory
WORKDIR /app
# Copy the package.json and package-lock.json files over in the intermediate "build" image
COPY package*.json ./
# Install the dependencies utilizing npm ci
RUN npm ci
# Copy the rest of the files over in the intermediate "build" image
COPY . .
# Build the project for production
RUN npm run build

# Next stage is the production setup
FROM node:lts-alpine
# Set node env for production
ENV NODE_ENV=production
# Set the working directory
WORKDIR /app
# Only copy the built files from the previous stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/server ./server
COPY --from=build /app/dist ./dist
# Create necessary directories and set permissions
RUN mkdir -p /app/adapters/express && \
    chmod -R 777 /app && \
    chown -R node:node /app
# Switch to the node user
USER node
# We need to expose the port
EXPOSE 3000/tcp
# Start the server
CMD ["server/entry.express"]