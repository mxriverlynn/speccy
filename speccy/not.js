var Specification = require("./spec");

// Not spec
// --------

function NotSpecification(spec){
  this.spec = spec;
}

NotSpecification.prototype = Object.create(Specification);

NotSpecification.prototype.isSatisfiedBy = function(obj){
  if (!this.spec || !this.spec.isSatisfiedBy){ 
    return false;
  }

  return !this.spec.isSatisfiedBy(obj);
};

module.exports = NotSpecification;
