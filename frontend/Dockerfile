FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start Vite server with host exposed
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
