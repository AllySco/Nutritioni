var MapWrapper = function(location, cords, zoom) {
  var container = location;
  this.googleMap = new google.maps.Map(container, {
    center: cords,
    zoom: zoom
  });
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
   },

   geolocate: function() {
    console.log("geolocation", navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("callback from geo", position)
      var center = {lat: position.coords.latitude, lng: position.coords.longitude};
      console.log(center)
      this.googleMap.setCenter(center);
      this.addMarker(center);
    }.bind(this));
   }
}

module.exports = MapWrapper;
