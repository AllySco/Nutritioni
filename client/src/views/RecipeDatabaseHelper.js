var RecipeDatabaseHelper = function() {
  this.url = 'http://localhost:3001/api/recipes'
}

RecipeDatabaseHelper.prototype = {

  makeGetRequest: function() {
    var request = new XMLHttpRequest()
    request.open("GET", url)
    request.addEventListener('load', function() {
      this.recipesDAta = JSON.parse(request.responseText)
      this.handleDropdown(request.responseText);
    }.bind(this))
    request.send();
  },

  makePostRequest:  function(recipeData) {
    var jsonString = JSON.stringify(recipeData);
    var request = this.request = new XMLHttpRequest();
    request.open('POST', this.url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', this.handleResponse.bind(this));
    request.send(jsonString);
    }
  }
