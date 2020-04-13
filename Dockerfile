FROM node:10

COPY . /root/

RUN cd /root && npm i

WORKDIR /root

ENV NODE_ENV production
EXPOSE 3000
CMD [ "node", "./index.js"]
