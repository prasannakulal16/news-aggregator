# Use a Node.js base image (Alpine for smaller size)
FROM node:20-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json to optimize caching
COPY package.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]
