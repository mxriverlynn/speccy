var AndSpec = require("./and");
var OrSpec = require("./or");
var NotSpec = require("./not");

// Specification Base
// ------------------

var Specification = {
  and: function(spec){
    return new AndSpec(this, spec);
  },

  or: function(spec){
    return new OrSpec(this, spec);
  },

  not: function(spec){
    return new NotSpec(spec);
  }
};

module.exports = Specification;
