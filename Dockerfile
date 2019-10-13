FROM node:carbon-slim

# Create app directory
WORKDIR /pugchat-api

# Install app dependencies
COPY package.json /pugchat-api/
RUN npm install

# Bundle app source
COPY . /pugchat-api/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
