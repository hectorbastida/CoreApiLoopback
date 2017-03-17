# CoreAppBackEnd

Backend / API for the CoreAppBackEnd made with [LoopBack](http://loopback.io).

## Getting Started
  Before Running the project please follow this instructions:
* Install [Docker](https://docs.docker.com/engine/installation/) follow instructions depending on your operating system.
* Make sure docker-compose is installed(try with `docker-compose -v`) if not please [install it](https://docs.docker.com/compose/install/)

### Running the loopback application
  To run the application using docker-compose:
   ```
   $ docker-compose up
   ``` 
   Docker-compose will build the image(if not already built) for our project(this can take 5-10 minutes)
   and procceed to run it and also run the mongodb image and link them, in the console you will see:

   ```
   loopback_1  | 
   loopback_1  | [nodemon] 1.11.0
   loopback_1  | [nodemon] to restart at any time, enter `rs`
   loopback_1  | [nodemon] watching: *.*
   loopback_1  | [nodemon] starting `babel-node .`
   loopback_1  | Web server listening at: http://0.0.0.0:3000
   loopback_1  | Browse your REST API at http://0.0.0.0:3000/explorer
   ```

   Open your browser at the http://0.0.0.0:3000/explorer and you should see the swagger ui.

## Development workflow
* After running `docker-compose up` to access our project's container run:
	`docker exec -it CoreAppBackEnd bash` here go ahead and use the npm scripts(listed below)
* To access the mongodb container run:
	`docker exec -it coreappbackend_mongo_1 mongo` this will let you in the mongo shell.
* To list running container run:
	` docker ps`

## Npm scripts
  The scripts are: 
* `npm run lint`: run check linters
* `npm start`: run start project
* `npm run test`: run tests
* `npm run posttest`: run lint and nsp 
* `npm run fixlint`: fix linter auto
* `npm run seed`: Insert seed data to database, roles and users, database has to be empty in order for this script to work.

To follow the development workflow please follow this instructions:
* **npm** start is called by docker-compose in the project container, no need to run it manually(unless you are not using docker for developing).
* **npm run test** Uses mocha to run the tests for the api, it also runs **npm run posttest** script.
* **npm run posttest** runs the **npm run lint** script, it checks linters and nps.
* **npm run fixlint** Fixes linter errors, if it can't fix something it will be logged in the console and the fix is going to have to be done manually.

## Docker commands
   * `docker-compose up -d`: build and run mongodb and project images in background
   * `docker-compose up`: build and run mongodb and project images
   * `docker-compose stop`: stop the docker-compose builded containers
   * `docker-compose down`: delete the docker-compose builded containers
   * `docker-compose stop [container_name/container_id]`: stop a specific container
   * `docker logs [container_name/container_id]`: Visualize the logs content of a container 

## Imports

For easier file importing this project is using the babel plugin [babel-root-import](https://www.npmjs.com/package/babel-root-import) example:

```
import server from '~/server/server.js';

```
The `~` symbol represents the root path of our application.
