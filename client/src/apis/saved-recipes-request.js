var SavedRecipesRequest = function() {
  this.url = 'http://localhost:3001/api/recipes/'
}

SavedRecipesRequest.prototype = {
  all: function(callback) {
    var request = new XMLHttpRequest();
    request.open("GET", this.url)
    request.addEventListener('load', function() {
      callback(request.responseText);
    }) 
    request.send();
  },

  findByTitle: function(title, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", this.url + title);
    request.addEventListener('load', function() {
      callback(request.responseText);
    }) 
    request.send();
  },
  new:  function(recipeData, callback) {
    var jsonString = JSON.stringify(recipeData);
    var request = new XMLHttpRequest();
    request.open('POST', this.url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', function() {
      callback(request.responseText);
    });
    request.send(jsonString);

  },
  delete: function(title, callback) {
    var jsonString = JSON.stringify(recipeData);
    var request = new XMLHttpRequest();
    request.open("DELETE", this.url + "/title/" + title + "/delete"  ) 
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', function() {
      callback(request.responseText);
    });
    request.send(); 
  }
}

module.exports = SavedRecipesRequest;