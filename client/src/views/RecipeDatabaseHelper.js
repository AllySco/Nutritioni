var RecipeDatabaseHelper = function() {
  this.url = 'http://localhost:3001/api/recipes'
}

RecipeDatabaseHelper.prototype = {

  makeGetRequest: function(callback) {
    var request = new XMLHttpRequest()
    request.open("GET", url)
    request.addEventListener('load', function() {
      callback(request.responseText);
    }) 
    request.send();
  },

  makePostRequest:  function(recipeData, callback) {
    var jsonString = JSON.stringify(recipeData);
    var request = this.request = new XMLHttpRequest();
    request.open('POST', this.url + recipeData.id);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', callback());
    request.send(jsonString);
    }

  makeDeleteRequest: function(title, callback) {
    var jsonString = JSON.stringify(recipeData);
    var request = this.request = new XMLHttpRequest();
    request.open("DELETE", this.url + "/title/" + title + "/delete"  ) 
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', callback());

    }
  }
