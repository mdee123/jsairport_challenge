function Airport() {
  this.planes = [];
}

Airport.prototype.land = function(plane) {
  plane.land();
  this.planes.push(plane);
};

Airport.prototype.takeOff = function (plane) {
  plane.takeOff();
  var arr = this.planes;
  for(var i = 0; i <= arr.length - 1; i++) {
    if(arr[i] === plane) {
      arr.splice(i, 1);
    }
  }
};
