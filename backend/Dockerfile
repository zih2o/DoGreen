FROM node:16.16.0 as base

WORKDIR /usr/src/app
# Add package file
COPY package.json ./
COPY yarn.lock ./
COPY scripts/dev.sh ./scripts/dev.sh

# Install deps
RUN yarn install

# Copy source
COPY src ./src
COPY tsconfig.json ./tsconfig.json
COPY openapi.json ./openapi.json

# Build dist
RUN yarn build

# RUN yarn start
# Expose port 3000
EXPOSE 3000
# CMD ["/bin/ls", "-a", "./dist"]
# RUN yarn dev
# CMD ["node", "--experimental-modules", "--experimental-specifier-resolution=node", "./dist/src/server.js"]
CMD ["yarn ts-node --esm --experimental-specifier-resolution=node src/server.ts"]