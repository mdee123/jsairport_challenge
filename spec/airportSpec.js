describe('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = {
      land: function() {
      },
      takeOff: function() {
      }
    };

    spyOn(plane, 'land');
    spyOn(plane, 'takeOff');
  });

  describe('#land', function() {
    beforeEach(function() {
      airport.land(plane);
    });
    it('instructs the plane to land', function() {
      expect(plane.land).toHaveBeenCalled();
    });

    it('confirms the plane has landed', function() {
      expect(airport.planes).toContain(plane);
    });
  });

  describe('#takeOff', function() {
    beforeEach(function() {
      airport.takeOff(plane);
    });
    it('instructs the plane to land', function() {
      expect(plane.takeOff).toHaveBeenCalled();
    });

    it('confirms the plane has landed', function() {
      expect(airport.planes).not.toContain(plane);
    });
  });
});
