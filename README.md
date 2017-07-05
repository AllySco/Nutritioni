# Nutritioni

*Nutritioni* was made for the group JavaScript project as part of the Software Engineering course at CodeClan. It features the use of the [Edamam API](https://developer.edamam.com/), a home-made API, *DOM* manipulation and use of MongoDB. The app can analyse recipe data and provide statistics. The app has further functionalities like providing a store locator with a Google Map and providing useful nutritional information.


### Table of Contents
**[Setting up Nutritioni](#setting-up-nutritioni)**<br>
**[Code Commentary](#code-commentary)**<br>
**[Contributors](#contributors)**<br>


### Setting up Nutritioni

Run all the following in your Terminal and in the top directory of the project.

1. Get all the node modules you need to run the project:
```bash
npm install
```

2. Install *Nodemon*:
```bash
npm install -g nodemon
```

3. Run your `server.js` file using *Nodemon*:
```bash
nodemon server.js
```

4. This project uses webpack. Make sure you have webpack running, you can use the provided script for this:
```bash
npm run build
```

5.Launch the MongoDB database by running the command:
```bash
mongod
```

6. There are seeds files that you need to run in order to populate the database, use the command to start the populate script:
```bash
npm run seeds
```

7. Open localhost to view the project in your favourite browser.
```
http://localhost:3001/
```

### Code Commentary

The project follows classic webpack structure with some notable additions.

| Directory           |  Responsibility               |
|-------------------- |------------------------------ |
|  **build/**         |   The *build* directory handles all elements that build pages of app like index.html, images and CSS files.            |
|  **src/apis**       |  The *API* directory handles requests to the [Edamam API](https://developer.edamam.com/) and our home-made store locator API.                                                  |
|  **src/charts**     |  The *charts* directory utilises  [highcharts](https://www.highcharts.com/demo/) to analyse our recipe data. |
|  **src/components** |  The *components* directory incorporates our added functionality like navigation and handling Google Maps|
|  **src/models**     |  The *models* directory models the data structure that we are using in our databases.                               |
|   **views/**        |  The *views* directory is responsible for displaying different views on the app.                                     |
|  **controllers/**   |  The *controllers* directory looks after the routing in this app.                                                  |
|  **db**/            |  The *db* directory is responsible for providing seed data and making queries to the database.                       |



### Contributors

| The crew  |
|-------------------------------------------------------|
|  [Ally Gerrie](https://github.com/AllySco)            |
|  [Eoghan Crowley](https://github.com/eoghanscrowley) |
|  [Charlie Wood](https://github.com/charliemowood)     |
|  [Chris Woodall](https://github.com/ChrisPy-RuBy)    |


If you want to contribute to this project see [CONTRIBUTE.md](https://github.com/eoghanscrowley/Nutritioni/blob/master/CONTRIBUTE.md)
