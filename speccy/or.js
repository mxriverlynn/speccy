var Specification = require("./spec");

// Or spec
// -------

function OrSpecification(left, right){
  this.left = left;
  this.right = right;
}

OrSpecification.prototype = Object.create(Specification);

OrSpecification.prototype.isSatisfiedBy = function(obj){
  var leftSat, rightSat;

  if (this.left && this.left.isSatisfiedBy) {
    leftSat = this.left.isSatisfiedBy(obj);
  }

  if (this.right && this.right.isSatisfiedBy) {
    rightSat = this.right.isSatisfiedBy(obj);
  }

  return leftSat || rightSat;
};

module.exports = OrSpecification;
