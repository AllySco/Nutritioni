var MapWrapper = function(location, coords, zoom) {
  var container = location;
  this.iconBase = 'https://maps.google.com/mapfiles/ms/icons/'
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.marker = null;
  this.center;
}

MapWrapper.prototype = {
  addMarker: function (coords, markerType) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      icon: this.iconBase + markerType
    })
    return marker
  },

  // addClickEvent: function() {
  //   this.googleMap.addListener('click', function(event) {
  //     var coords = { lat: event.latLng.lat(), lng: event.latLng.lng()}
  //     this.addMarker(coords)
  //   }.bind(this));
  // },

  geolocate: function() {
    console.log("geolocation", navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function(position) {
      this.center = {lat: position.coords.latitude, lng: position.coords.longitude};
      console.log("our current location", this.center)
      this.googleMap.setCenter(this.center);
      this.addMarker(this.center, 'purple.png');
    }.bind(this));
  },

  estimateDistanceRequest: function(storeCoords, callback) {
    // console.log("this lat", this.center.lat);
    // console.log("storeCoords", storeCoords.lat);
    var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=' + this.center.lat + "," + this.center.lng + "8&destinations=" + storeCoords.lat + "," + storeCoords.lng + "&&mode=walking&key=AIzaSyB5tNvq_E_YHSLc_6_Zi_ruLFTdiCrnitQ" 
    console.log("the url", url)
    var request = new XMLHttpRequest()
    request.open("GET", url)
    request.addEventListener('load', function() {
      callback(request.responseText);
    })
    request.send();
  },

  addInfoWindows: function(storeCoords, storeTitle ) {
    var marker = this.addMarker(storeCoords, "restaurant.png");
    marker.addListener('click', function() {
      console.log('this this', this)
      this.estimateDistanceRequest(storeCoords, this.estimateTime)
      var infoWindow = new google.maps.InfoWindow({
        content: storeTitle
      });
      infoWindow.open(this.googleMap, marker);
    }.bind(this));
  },

  estimateTime: function(responseText) {
    console.log("made it to estimateTime!", responseText);
  }
}

module.exports = MapWrapper;
// api key AIzaSyB5tNvq_E_YHSLc_6_Zi_ruLFTdiCrnitQ 
// current location = 55.9468738, lng: -3.2016112999999997
