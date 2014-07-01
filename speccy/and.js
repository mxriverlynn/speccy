var Specification = require("./spec");

// And spec
// --------

function AndSpecification(left, right){
  this.left = left;
  this.right = right;
}

AndSpecification.prototype = Object.create(Specification);

AndSpecification.prototype.isSatisfiedBy = function(obj){
  var leftSat, rightSat;

  if (this.left && this.left.isSatisfiedBy) {
    leftSat = this.left.isSatisfiedBy(obj);
  }

  if (this.right && this.right.isSatisfiedBy) {
    rightSat = this.right.isSatisfiedBy(obj);
  }

  return leftSat && rightSat;
};

module.exports = AndSpecification;
