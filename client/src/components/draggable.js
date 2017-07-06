var Draggable = function(draggableItem, container, dropLocations) {
  this.setUpDraggableItem(draggableItem);
  this.setUpContainer(container);
  this.landSpotOffsets = dropLocations;
  this.render();
  this.dragging = false;
  this.mouseOffset = {};
}

Draggable.prototype = {
  render: function() {
    this.createPositionData();
    this.listenForEvents();
  },
  setUpContainer: function(container) {
    this.container = container;
  },
  setUpDraggableItem: function(item) {
    this.draggableItem = item;
    this.draggableItem.classList.add('draggable');
    this.draggableItem.style.transform = 'translate(0px, 0px)';
  },
  getTranslationOnGrab: function() {
    var translation = this.draggableItem.style.transform;
    this.translationOnGrab = {}
    this.translationOnGrab.x = Number(translation.split('(')[1].split(',')[0].replace('px', ''));
    this.translationOnGrab.y = Number(translation.split('(')[1].split(',')[1].replace('px)', ''));
  },
  getBoxCoordsOnGrab: function() {
    var box = this.draggableItem.getBoundingClientRect();
    this.boxCoordsOnGrab = {};
    this.boxCoordsOnGrab.x = box.left;
    this.boxCoordsOnGrab.y = box.top;
  },
  getNewCoords: function(event) {
    var newPosition = {};
    newPosition.x = event.x - this.mouseOffset.x;
    newPosition.y = event.y - this.mouseOffset.y;
    return this.correctCoords(newPosition);
  },
  setBoxCoords: function(newCoords) {
    var translation = {
      x: newCoords.x - this.boxCoordsOnGrab.x + this.translationOnGrab.x,
      y: newCoords.y - this.boxCoordsOnGrab.y + this.translationOnGrab.y
    }
    this.draggableItem.style.transform = 
      'translate(' + translation.x + 'px, ' + translation.y + 'px)';
  },
  setMouseOffset: function(event) {
    this.mouseOffset.x = event.x - this.boxCoordsOnGrab.x;
    this.mouseOffset.y = event.y - this.boxCoordsOnGrab.y;
    console.log("this is setMouseOffSet", this.mouseOffset);
  },
  correctCoords: function(coords) {
    if (coords.x < this.edges.left) coords.x = this.edges.left;
    if (coords.y < this.edges.top) coords.y = this.edges.top;
    if (coords.x > this.edges.right) coords.x = this.edges.right;
    if (coords.y > this.edges.bottom) coords.y = this.edges.bottom;
    return coords;
  },
  handleMousedown: function(event) {
    event.preventDefault();
    this.draggableItem.style.transition = '';
    this.dragging = true;
    this.getBoxCoordsOnGrab();
    this.getTranslationOnGrab();
    this.setMouseOffset(event);
  },
  handleMousemove: function(event) {
    var newCoords = this.getNewCoords(event);
    if (this.dragging) this.setBoxCoords(newCoords);
  },
  handleMouseup: function(event) {
    this.dragging = false;
    var containerBounds = this.container.getBoundingClientRect();
    var boxBounds = this.draggableItem.getBoundingClientRect();
    var landSpots = this.mapLandSpots(containerBounds);
    this.moveToLandSpot(landSpots, boxBounds);
  },
  handleWindowResize: function() {
    this.edges.right = window.innerWidth - this.draggableItem.width;
    this.edges.bottom = window.innerHeight - this.draggableItem.height;
  },
  moveToLandSpot: function(landSpots, boxBounds) {
    for (var i = 0; i < landSpots.length; i++) {
      var distance = this.getDistance(landSpots[i], boxBounds);
      if (distance.x < 150 && distance.y < 150) {
        this.draggableItem.style.transition = 'transform 0.2s ease-out';
        this.setBoxCoords({ x: landSpots[i].left, y: landSpots[i].top });
      }
    }
  },
  getDistance: function(landSpot, boxBounds) {
    var distanceX = landSpot.left - boxBounds.left;
    var distanceY = landSpot.top - boxBounds.top;
    if (distanceX < 0) distanceX *= -1;
    if (distanceY < 0) distanceY *= -1;
    return { x: distanceX, y: distanceY };
  },
  mapLandSpots: function(containerBounds) {
    return this.landSpotOffsets.map(function(landSpotOffset) {
      var landSpot = {};
      landSpot.left = landSpotOffset.left + containerBounds.left;
      landSpot.top = landSpotOffset.top + containerBounds.top;
      return landSpot;
    });
  },
  listenForEvents: function() {
    this.draggableItem.addEventListener('mousedown', this.handleMousedown.bind(this));
    window.addEventListener('mousemove', this.handleMousemove.bind(this));
    window.addEventListener('mouseup', this.handleMouseup.bind(this));
    window.addEventListener('resize', this.handleWindowResize.bind(this));
  },
  createPositionData: function() {
    console.log(this.draggableItem.width);
    this.edges = {
      left: 0,
      top: 0,
      right: window.innerWidth - this.draggableItem.width,
      bottom: window.innerHeight - this.draggableItem.height
    };
    // this.landSpotOffsets = [
    //   { left: 0, top: 0}
    // ]
  }
}

module.exports = Draggable;