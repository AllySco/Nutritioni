var express = require('express');
var app = express();
var recipeRouter = express.Router();

var Recipe = require('../client/src/models/recipe');
var RecipeQuery = require('../db/recipeQuery');
var query = new RecipeQuery();

// INDEX
recipeRouter.get('/', function(req, res) {
	query.all(function(recipes) {
		res.json(recipes);
	});
});

// NEW
recipeRouter.post('/', function(req, res) {
  var newRecipe = new Recipe({ 
    title: req.body.title,
    ingredients: req.body.ingredients,
    nutritionalInformation: req.body.nutritionalInformation
  });
  query.add(newRecipe, function(allRecipes) {
    res.json(allRecipes);
  });
});

// SHOW
recipeRouter.get("/:id", function(req, res) {
  query.find(req.params.id, function(recipe) {
    res.json(recipe);
  });
});

// FIND BY NAME
recipeRouter.get('/title/:title', function(req, res) {
  query.findByTitle(req.params.title, function(recipe) {
    res.json(recipe);
  })
});

// DELETE 
recipeRouter.delete("/:id/delete", function(req, res) {
  query.delete(req.params.id, function(recipe) {
    res.json(recipe);
  });
});

// UPDATE
recipeRouter.put('/:id', function(req, res) {
  var updatedRecipe = new Recipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
    nutritionalInformation: req.body.nutritionalInformation
  });
  query.update(req.params.id, updatedRecipe, function(recipe) {
    res.json(recipe);
  });
});





module.exports = recipeRouter;
