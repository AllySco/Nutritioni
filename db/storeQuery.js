var MongoClient = require('mongodb').MongoClient;


var StoreQuery = function() {
  this.url = 'mongodb://localhost:27017/nustore';
}

StoreQuery.prototype = {
  all:function(callback) {
    MongoClient.connect(this.url, function(err, db){
      if(err) return;
      var collection = db.collection("stores");
      collection.find().toArray(function(err, recipes) {
        if(err) return;
        callback(recipes);
      });
    });
  }
}

module.exports = StoreQuery;
