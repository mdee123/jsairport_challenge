function Weather() {

}

Weather.prototype.isStormy = function () {
  var rand = Math.floor((Math.random() * 10) + 1);
  if (rand >= 8) {
    return true;
  }
  else {
    return false;
  }
};
