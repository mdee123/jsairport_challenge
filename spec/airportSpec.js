describe('Airport', function() {

  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = {
      land: function(){

      }
    };

    spyOn(plane, 'land');
  });

  describe('landing tests', function(){
    it('instructs the plane to land', function(){
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });
    // it('confirms the plane has landed', function(){
    //   expect(airport)
    // });
  });
});
