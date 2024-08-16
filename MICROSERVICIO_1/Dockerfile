# Dockerfile for MICROSERVICIO_1
FROM node:18

# Create and set the working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Expose port and start the app
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
