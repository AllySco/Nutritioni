var express = require('express');
var app = express();
var recipeRouter = express.Router();

var RecipeQuery = require('../db/recipeQuery.js');
var query = new RecipeQuery();

recipeRouter.get('/', function(req, res) {
	query.all(function(recipes) {
		res.json(recipes);
	});
});


module.exports = recipeRouter;
