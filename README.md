# Nutritioni

*Nutritioni* was made for the group JavaScript project for CodeClan. It features the use of the [Edamam API](https://developer.edamam.com/), a home-made API, *DOM* manipulation and use of MongoDB.


### Table of Contents
**[Setting up Nutritioni](#setting-up-nutritioni)**<br>



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
