var MapWrapper = require('../components/map-wrapper.js');
var StoreLocatorRequest = require('../apis/store-locator-request.js')

// make a make map container methof


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
        var main = document.createElement('main');
        main.id = "store-locator";

        var mapContainer = this.createMapContainer();

        var mapHeader = this.createMapHeader();

        var h2 = this.createTitle();

        var opacityWrapper = this.createOpacityWrapper();


        mapHeader.appendChild(h2);
        mapContainer.appendChild(mapHeader);
        mapContainer.appendChild(opacityWrapper);
        main.appendChild(mapContainer);
        document.body.appendChild(main);
        
        var map = this.createMap();
    },

    createMapContainer: function() {
        var mapContainer = document.createElement('div');
        mapContainer.id = "map-container";
        return mapContainer;
    },

    createMapHeader: function() {
        var mapHeader = document.createElement('div');
        mapHeader.id = "map-header";
        return mapHeader
    },

    createTitle: function () {
        var h2 = document.createElement('h2');
        h2.innerText = "GOOD FOOD NEAR YOU";
        return h2;     
    },

    createOpacityWrapper: function () {
        var opacityWrapper = document.createElement('div');
        opacityWrapper.id = "opacity-wrapper";
        return opacityWrapper;  
    },

    createMap: function() {
        var opacityWrapper = document.getElementById('opacity-wrapper');
        var coords = { lat: 55.954276, lng: -3.197960};
        var zoom = 5;      
        this.map = new MapWrapper(opacityWrapper, coords, zoom);
        this.map.geolocate();
    },

    populateMap: function(){
        var storeLocatorRequest = new StoreLocatorRequest()
        storeLocatorRequest.makeGetRequest(function(responseData){
            var stores = JSON.parse(responseData);
            // console.log(stores)
            for (store of stores) {
                this.map.addInfoWindows(store.coords, store.title )
            }
        }.bind(this))
    }

}
module.exports = StoreLocator;


