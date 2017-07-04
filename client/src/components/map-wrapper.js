var MapWrapper = function(location, cords, zoom) {
  var container = location;
  this.googleMap = new google.maps.Map(container, {
    center: cords,
    zoom: zoom
  });
}

MapWrapper.prototype = {
  addMarker: function (cords) {
    var marker = new google.maps.Marker({
      position: cords,
      map: this.googleMap
    })
  },
  addClickEvent: function() {
    this.googleMap.addListener('click', function(event) {
      var coords = { lat: event.latLng.lat(), lng: event.latLng.lng()}
      this.addMarker(coords)
    }.bind(this));
   },

   geolocate: function() {
    navigator.geolocation.getCurrrentPosition(function(position) {
      var center = {lat: position.coords.latitude, lng: position.coords.longitude};
      this.googleMap.setCenter(center);
      this.addMarker(center);
    }.bind(this));
   };
}

module.exports = MapWrapper;
