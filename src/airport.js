function Airport(weather) {
  this.planes = [];
  this.weather = weather;
}

Airport.prototype.land = function(plane) {
  if (this.isStormy() === true) {
    throw new Error("Weather is stormy");
  }
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

Airport.prototype.isStormy = function () {
  return weather.isStormy();
};
