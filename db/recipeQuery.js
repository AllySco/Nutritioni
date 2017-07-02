var MongoClient = require('mongodb').MongoClient;


var RecipeQuery = function() {
  this.url = 'mongod://localhost:27017/nutritioni';
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
  }
}

module.exports = RecipeQuery;