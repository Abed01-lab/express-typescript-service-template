# Use the official Node.js 20 Alpine image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built code of your application
COPY ./dist ./

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci --production

# Expose the port your app runs on (change if necessary)
EXPOSE 3000

# Command to run your application
CMD ["node", "src/index.js"]