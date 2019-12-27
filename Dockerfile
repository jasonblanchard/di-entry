FROM node:12.14.0-buster AS base

ENV APP_HOME /usr/src/app/
ENV PROD_DEPS /usr/src/deps/prod/
RUN useradd -ms /bin/bash docker

FROM base AS build

USER docker

COPY --chown=docker:docker package.json package-lock.json $PROD_DEPS
WORKDIR $PROD_DEPS
RUN npm ci --production

COPY --chown=docker:docker package.json package-lock.json $APP_HOME
WORKDIR $APP_HOME
RUN npm ci

COPY --chown=docker:docker src $APP_HOME/src/
COPY --chown=docker:docker config $APP_HOME/config/
COPY --chown=docker:docker tsconfig.json $APP_HOME/
COPY --chown=docker:docker .db-migraterc $APP_HOME/

WORKDIR $APP_HOME
RUN npm run build

FROM base AS release

RUN mkdir $APP_HOME
RUN chown docker:docker $APP_HOME

USER docker
WORKDIR $APP_HOME

COPY --from=build --chown=docker:docker $PROD_DEPS/node_modules $APP_HOME/node_modules/
COPY --from=build --chown=docker:docker $APP_HOME/build $APP_HOME/build
COPY --from=build --chown=docker:docker $APP_HOME/config $APP_HOME/config
COPY --from=build --chown=docker:docker $APP_HOME/package.json $APP_HOME/package.json
COPY --from=build --chown=docker:docker $APP_HOME/.db-migraterc $APP_HOME/.db-migraterc

CMD ["npm", "start", "--production"]
