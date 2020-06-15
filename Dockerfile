FROM node:10

WORKDIR /app
COPY . /app/

RUN yarn global add knex
# Default app commands
ENTRYPOINT ["yarn"]
CMD ["run", "start"]

EXPOSE 8849
