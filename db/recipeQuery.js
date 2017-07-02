var MongoClient = require('mongodb').MongoClient;


var RecipeQuery = function() {
  this.url = 'mongodb://localhost:27017/nutritioni';
}

RecipeQuery.prototype = {
  all:function(callback) {
    MongoClient.connect(this.url, function(err, db){
      if(err) return;
      var collection = db.collection("recipes");
      collection.find().toArray(function(err, recipes) {
        if(err) return;
        callback(recipes);
      });
    });
  },

  add: function(recipeToAdd, callback) {
    MongoClient.connect(this.url, function( err, db){
      if(err) return;
      var collection = db.collection("recipes");
      collection.insert(recipeToAdd);
      collection.find().toArray(function(err, docs) {
        if (err) return; 
          callback(docs);
      })
    })
  }
}

module.exports = RecipeQuery;
