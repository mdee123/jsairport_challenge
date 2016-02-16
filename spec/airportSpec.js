describe('Airport', function() {
  var airport;

  beforeEach(function() {
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
    // plane = {
    //   land: function() {
    //   },
    //   takeOff: function() {
    //   }
    // };

    // weather = {
    //   isStormy: function() {
    //
    //   }
    // };

    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);


    // spyOn(plane, 'land');
    // spyOn(plane, 'takeOff');
  });

  describe('#land', function() {
    describe('when weather is stormy', function(){
      beforeEach(function() {
        weather.isStormy.and.returnValue(true);
      });
      it('throws an error is stormy', function() {
        expect(function(){ airport.land(plane); }).toThrowError("Weather is stormy");
      });
    });
    describe('when weather is fine', function(){
      beforeEach(function() {
        weather.isStormy.and.returnValue(false);
        airport.land(plane);
      });

      it('instructs the plane to land', function() {
        expect(plane.land).toHaveBeenCalled();
      });

      it('confirms the plane has landed', function() {
        expect(airport.planes).toContain(plane);
      });
    });
  });

  describe('#takeOff', function() {
    beforeEach(function() {
      airport.takeOff(plane);
    });
  // describe('when weather is stormy', function(){
  //
  //
  //
  // });
  //
    it('instructs the plane to land', function() {
      expect(plane.takeOff).toHaveBeenCalled();
    });

    it('confirms the plane has landed', function() {
      expect(airport.planes).not.toContain(plane);
    });
  });

});
