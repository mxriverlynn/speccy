var Specfication = require("../speccy");
var HasValue = require("./helpers/hasValue");

describe("not specs", function(){
  var hasFoo = new HasValue("foo");
  var hasBar = new HasValue("bar");
  var hasFooNotBar = hasFoo.not(hasBar);

  describe("when spec is met", function(){
    var result;

    beforeEach(function(){
      result = hasFooNotBar.isSatisfiedBy({
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
      result = hasFooNotBar.isSatisfiedBy({
        foo: "bar",
        bar: "baz"
      });
    });

    it("should not be satisfied", function(){
      expect(result).toBe(false);
    });
  });

});
