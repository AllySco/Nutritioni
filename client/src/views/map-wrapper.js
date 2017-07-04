var MapWrapper = function(location, coords, zoom) {
  var container = location;
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype = {
  addMarker: function (coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
  },
  addClickEvent: function() {
    this.googleMap.addListener('click', function(event) {
      var coords = { lat: event.latLng.lat(), lng: event.latLng.lng()}
      this.addMarker(coords)
    }.bind(this));

   }
}

module.exports = MapWrapper;
