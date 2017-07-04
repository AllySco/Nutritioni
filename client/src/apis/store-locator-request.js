

var StoreLocatorRequest = function() {
  this.url = 'http://localhost:3001/api/stores'
}

StoreLocatorRequest.prototype = {

  makeGetRequest: function(callback) {
    var request = new XMLHttpRequest()
    request.open("GET", this.url)
    request.addEventListener('load', function() {
      callback(request.responseText);
    })
    request.send();
  },

}

module.exports = StoreLocatorRequest;