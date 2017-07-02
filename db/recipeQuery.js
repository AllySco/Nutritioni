var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;


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
      });
      db.close();
    })
  },

  find: function(recipeID, callback) {
    var objectID = new ObjectID(recipeID);
    MongoClient.connect(this.url, function(err,db){
      if(err) return;
      var collection = db.collection("recipes");
      collection.find({_id: objectID}).toArray(function(err, docs) {
        if (err) return;
        callback(docs);
      });
      db.close();
    });
  },

  delete: function(recipeID, callback) {
    var objectID = new ObjectID(recipeID);
    MongoClient.connect(this.url, function(err,db) {
      if(err) return;
      var collection = db.collection("recipes");
      collection.deleteOne({_id: objectID})
      collection.find().toArray(function(err, docs) {
        if (err) return;
        callback(docs);
      });
      db.close();
    });
  },

  update: function(recipeID, updatedRecipe, callback) {
    var objectID = new ObjectID(recipeID);
    MongoClient.connect(this.url, function(err, db) {
      if (err) return err;
      var collection = db.collection('recipes');
      collection.updateOne({_id: objectID}, {
        $set: {
          "title": updatedRecipe.title,
          "ingredients": updatedRecipe.ingredients,
          "nutritionalInformation": updatedRecipe.nutritionalInformation
        },
        $currentDate: { "lastModified": true }
      }, function(err, results) {
        if (err) return;
      });
      collection.find().toArray(function(err, docs) {
        if (err) return;
        callback(docs);
      });
      db.close();
    });
  },

  findByTitle: function(title, callback) {
    MongoClient.connect(this.url, function(err,db){
      if(err) return;
      var collection = db.collection("recipes");
      collection.find({ title: title }).toArray(function(err, docs) {
        if (err) return;
        callback(docs);
      });
      db.close();
    });
  }
}

module.exports = RecipeQuery;
