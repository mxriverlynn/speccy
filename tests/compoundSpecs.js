var Specfication = require("../index");
var HasValue = require("./helpers/has-value");

describe("compound specs", function(){

  var hasFoo = new HasValue("foo");
  var hasBar = new HasValue("bar");
  var hasBaz = new HasValue("baz");

  var mySpec = hasFoo.and(
    (
      hasBar.not(hasBaz)
    ).or(
      hasBaz.not(hasBar)
    )
  );

  describe("when object has foo and bar", function(){
    var result;

    beforeEach(function(){
      result = mySpec.isSatisfiedBy({
        foo: 1,
        bar: 2
      });
    });

    it("should be satisfied", function(){
      expect(result).toBe(true);
    });
  });

  describe("when object has foo and baz", function(){
    var result;

    beforeEach(function(){
      result = mySpec.isSatisfiedBy({
        foo: 1,
        baz: 3
      });
    });

    it("should be satisfied", function(){
      expect(result).toBe(true);
    });
  });

  describe("when object has foo, bar and baz", function(){
    var result;

    beforeEach(function(){
      result = mySpec.isSatisfiedBy({
        foo: 1,
        bar: 2,
        baz: 3
      });
    });

    it("should not be satisfied", function(){
      expect(result).toBe(false);
    });
  });

});
