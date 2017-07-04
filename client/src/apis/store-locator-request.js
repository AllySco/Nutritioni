

var StoreLocatorRequest = function() {
  this.url = 'http://localhost:3001/api/stores'
}

StoreLocatorRequest.prototype = {

  makeGetRequest: function(callback) {
    var request = new XMLHttpRequest()
    request.open("GET", url)
    request.addEventListener('load', function() {
      callback(request.responseText);
    })
    request.send();
  },

}









makeGetRequest: function(callback) {
  var request = new XMLHttpRequest()
  request.open("GET", url)
  request.addEventListener('load', function() {
    callback(request.responseText);
  }) 
  request.send();
},