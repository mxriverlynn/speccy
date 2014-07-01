var Specfication = require("../index");
var HasValue = require("./helpers/has-value");

describe("and specs", function(){
  var hasFoo = new HasValue("foo");
  var hasBar = new HasValue("bar");
  var hasBaz = new HasValue("baz");

  console.log("--------------------------");
  console.log(hasFoo.and(hasBar).and);
  console.log("--------------------------");

  debugger;
  var hasFooBarBaz = hasFoo
    .and(hasBar)
    .and(hasBaz);

  describe("when specification is met", function(){
    var result;

    beforeEach(function(){
      result = hasFooBarBaz.isSatisfiedBy({
        foo: 1,
        bar: 2,
        baz: 3
      });
    });

    it("should be satisfied", function(){
      expect(result).toBe(true);
    });
  });

  describe("when specification is not met", function(){
    var result;

    beforeEach(function(){
      result = hasFooBarBaz.isSatisfiedBy({
        bar: 2,
        baz: 3
      });
    });

    it("should not be satisfied", function(){
      expect(result).toBe(false);
    });
  });

});
