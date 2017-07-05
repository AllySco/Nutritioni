var express = require('express');
var app = express();
var storeRouter = express.Router();

var Store = require('../client/src/models/store');
var StoreQuery = require('../db/storeQuery');
var query = new StoreQuery();

// INDEX
storeRouter.get('/', function(req, res) {
	query.all(function(stores) {
		res.json(stores);
	});
});

module.exports = storeRouter;
