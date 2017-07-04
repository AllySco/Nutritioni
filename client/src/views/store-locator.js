var MapWrapper = require('../components/map-wrapper.js');

var StoreLocator = function() {
    var h1 = document.createElement('h1')
    h1.innerHTML = "THIS IS THE STORE LOCATOR PAGE";
    var main = document.createElement('main');
    var mapContainer = document.createElement('div');
    mapContainer.id = "map";
    mapContainer.width = 500;
    mapContainer.height = 500;
    var coords = {lat:51, lng: 5}
    var zoom = 10;
    var mainMap = new MapWrapper(mapContainer, coords, zoom);
    mainMap.addMarker(coords);
    mainMap.addClickEvent();
    main.appendChild(h1);
    document.body.appendChild(main);
    main.appendChild(mapContainer);
}
StoreLocator.prototype = {
}
module.exports = StoreLocator;