var MapWrapper = function(location, coords, zoom) {
  var container = location;
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.marker = null;
}

MapWrapper.prototype = {
  addMarker: function (coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
    console.log("this is the map marker", marker)
    return marker
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
  },

  addInfoWindows: function(storeCoords, storeTitle) {
    var marker = this.addMarker(storeCoords);
    marker.addListener('click', function() {
      var infoWindow = new google.maps.InfoWindow({
        content: storeTitle
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}

module.exports = MapWrapper;
