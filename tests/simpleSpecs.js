var Specfication = require("../index");
var HasValue = require("./helpers/has-value");

describe("simple spec", function(){
  var hasFoo = new HasValue("foo");

  describe("when spec is met", function(){
    var result;

    beforeEach(function(){
      result = hasFoo.isSatisfiedBy({
        foo: "bar"
      });
    });

    it("should be satisfied", function(){
      expect(result).toBe(true);
    });
  });

  describe("when spec is not met", function(){
    var result;

    beforeEach(function(){
      result = hasFoo.isSatisfiedBy({
        quux: "bar"
      });
    });

    it("should not be satisfied", function(){
      expect(result).toBe(false);
    });
  });

});
