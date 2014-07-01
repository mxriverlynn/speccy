var Specfication = require("../speccy");
var HasValue = require("./helpers/hasValue");

describe("or specs", function(){
  var hasFoo = new HasValue("foo");
  var hasBar = new HasValue("bar");
  var hasFooNotBar = hasFoo.or(hasBar);

  describe("when one spec is met", function(){
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

  describe("when the other spec is met", function(){
    var result;

    beforeEach(function(){
      result = hasFooNotBar.isSatisfiedBy({
        bar: "baz"
      });
    });

    it("should be satisfied", function(){
      expect(result).toBe(true);
    });
  });

  describe("when neither spec is met", function(){
    var result;

    beforeEach(function(){
      result = hasFooNotBar.isSatisfiedBy({
        quux: "widget"
      });
    });

    it("should not be satisfied", function(){
      expect(result).toBe(false);
    });
  });

});
