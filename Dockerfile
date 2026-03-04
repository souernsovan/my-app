# Step 1: Use Node.js image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy dependency files and install
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the project
COPY . .

# Step 5: Build Next.js app
RUN npm run build

# Step 6: Expose port 3000
EXPOSE 3000

# Step 7: Run the app
CMD ["npm", "start"]