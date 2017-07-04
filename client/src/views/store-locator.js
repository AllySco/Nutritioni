var MapWrapper = require('../components/map-wrapper.js');
var StoreLocatorRequest = require('../apis/store-locator-request.js')


var StoreLocator = function() {
    var h1 = document.createElement('h1')
    h1.innerHTML = "THIS IS THE STORE LOCATOR PAGE";
    var main = document.createElement('main');
    var mapContainer = document.createElement('div');
    mapContainer.id = "map";
    mapContainer.width = 500;
    mapContainer.height = 500;
    var coords = {lat:55, lng: -3}
    var zoom = 15;
    var mainMap = new MapWrapper(mapContainer, coords, zoom);
    mainMap.geolocate();
    mainMap.addMarker(coords);
    mainMap.addClickEvent();
    main.appendChild(h1);
    document.body.appendChild(main);
    main.appendChild(mapContainer);
}
StoreLocator.prototype = {
    populateMap: function(){
        console.log("populateMap")
        var storeLocatorRequest = new StoreLocatorRequest()
        storeLocatorRequest.makeGetRequest(function(responseData){
            var stores = JSON.parse(responseData);
            console.log(stores)
            for (store of stores) {
                console.log( store.title)
            }

        }.bind(this))
    }
}
module.exports = StoreLocator;


// write a render function to tidy