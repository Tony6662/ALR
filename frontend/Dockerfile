FROM node:16.10.0-slim

WORKDIR /usr/src/app

# ENV PATH /app/node_modules/.bin:$PATH

COPY . /usr/src/app/

# install and app dependencies
RUN npm install -g npm
RUN npm install --force
RUN npm install -g @angular/cli
RUN ng update --all --force

CMD ng serve --host 0.0.0.0 --port 4200 --configuration=development --disable-host-check
