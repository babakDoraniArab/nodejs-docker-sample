FROM node:15
WORKDIR /app
COPY  package.json .
RUN npm install 
#copy all the files to the /app and because we have used the WORKDIR so we can write . or ./ for the destination 
COPY . ./
EXPOSE 3000
CMD ["node", "index.js"]
