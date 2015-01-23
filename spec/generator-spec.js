var generator = require('../generator.js');

describe("Scrambled Number generator", function() {
  it("should be a function", function() {
   

    expect(generator.generate).toBeDefined();
  });

  it("should return 1000 numbers", function() {
  
    var result = generator.generate();
    //var amount;


    expect(result.length - 1).toEqual(1000);
  });

  it("should return random numbers in an array", function() {
    var result = generator.generate();
    var result2 = generator.generate();

    expect(result).toNotBe(result2);

  });

});