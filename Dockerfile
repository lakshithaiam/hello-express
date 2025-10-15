# development-friendly image
FROM node:18

# create app dir
WORKDIR /usr/src/app

# copy package files first (so installs can be cached)
COPY package*.json ./

# install deps
RUN npm install

# copy app source
COPY . .

# expose and start
EXPOSE 3000
CMD ["npm", "start"]
