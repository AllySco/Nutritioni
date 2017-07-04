var MapWrapper = require('../components/map-wrapper.js');
var StoreLocatorRequest = require('../apis/store-locator-request.js')


var StoreLocator = function() {
    // state holders

    // ui components to be watching for events
    this.map = null;
    // ui instantiation
    this.render();
    this.populateMap();
    console.log(this.map);
}
StoreLocator.prototype = {
    render: function() {

        var h1 = document.createElement('h1')
        h1.innerHTML = "THIS IS THE STORE LOCATOR PAGE";
        var main = document.createElement('main');
        var mapContainer = document.createElement('div');
        mapContainer.id = "map";
        mapContainer.width = 500;
        mapContainer.height = 500;
        var coords = {lat:55, lng: -3}
        var zoom = 15
        this.map = new MapWrapper(mapContainer, coords, zoom);
        this.map.geolocate();
        this.map.addMarker(coords);
        this.map.addClickEvent();
        main.appendChild(h1);
        document.body.appendChild(main);
        main.appendChild(mapContainer);
    },

    populateMap: function(){
        var storeLocatorRequest = new StoreLocatorRequest()
        storeLocatorRequest.makeGetRequest(function(responseData){
            var stores = JSON.parse(responseData);
            // console.log(stores)
            for (store of stores) {
                this.map.addInfoWindows(store.coords, store.title)
            }
        }.bind(this))
    }


    // addInfoWindow: function(coords, text) {
    //   var marker = this.addMarker(coords);
    //   marker.addListener('click', function() {
    //     var infoWindow = new google.maps.InfoWindow({
    //       content: text
    //     });
    //     infoWindow.open(this.map, marker); 
    //   });
    // },


}
module.exports = StoreLocator;


