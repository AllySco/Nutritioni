# Nutritioni

*Nutritioni* was made for the group JavaScript project for CodeClan. It features the use of the [Edamam API](https://developer.edamam.com/), a home-made API, *DOM* manipulation and use of MongoDB.


### Table of Contents
**[Setting up Nutritioni](#setting-up-nutritioni)**<br>
**[Code Commentary](#code-commentary)**<br>
**[Contributors](#contributors)**<br>


### Setting up Nutritioni

Run all the following in your terminal and in the top directory of the project.

1. Get all the node modules you need to run the project:
```bash
npm install
```

2. Install *Nodemon*.
```bash
npm install -g nodemon
```

3. Run your the server.js:
```bash
nodemon server.js
```

4. This project uses Webpack. Make sure you have webpack running.
```bash
npm run build
```

5. Launch MongoDB the database. Run the command:
```bash
mongod
```

6. There are seeds files that you need to run. In order to populate the database, use the command:
```bash
npm run seeds
```

7. Open localhost to view the project in your favourite browser.
```
http://localhost:3001/
```

### Code Commentary

The project follows WebPack structure with some notable additions.

| Directory           |  Responsibility               |
|-------------------- |------------------------------ |
|  **build/**         |   The *build* directory handles all element that build pages of app like index.html, images and CSS files.   |
|  **src/apis**       |  The *API* directory handles request to the edaman API and our home-made location API.                             |
|  **src/charts**     |  The *charts* directory utilises  [highcharts](https://www.highcharts.com/demo/) to analyse our recipe data. |
|  **src/components** |  The *components* directory incorporates our added functionality like navigation and handling Google Maps|
|  **src/models**     |  The *models* directory models the data structure that we are using in our databases.                        |
|   **views/**        |  The *views* directory is responsible for displaying different views on the app.                           |
|  **controllers/**   |  The *controllers* directory looks after the routing in this app.                                             |
|  **db**/            |  The *db* directory is responsible for providing seed data and making queries to the database.              |



### Contributors

| The crew  |
|-------------------------------------------------------|
|  [Ally Gerrie](https://github.com/AllySco)            |
|  [Eoghan Crowley](https://github.com/eoghanscrowley) |
|  [Charlie Wood](https://github.com/charliemowood)     |
|  [Chris Woodall](https://github.com/ChrisPy-RuBy)    |
