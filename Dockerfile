FROM dockerfile/nodejs

ADD . /node

EXPOSE 3000

CMD node /node/lcc/bin/www

