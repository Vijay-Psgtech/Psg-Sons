# Stage 1: Build app
FROM node:23-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application files
COPY . .

# Build the app
RUN npm run build


# Stage 2: Nginx serve
FROM nginx:alpine

# Create your custom folder under nginx html
RUN mkdir -p /usr/share/nginx/html/psg-sons/dist

# Copy Vite build output to that folder
COPY --from=build /app/dist /usr/share/nginx/html/psg-sons/dist

# Expose your dev server port (adjust if different)
EXPOSE 5173

# Start app in dev mode
CMD ["nginx", "-g", "daemon off;"]