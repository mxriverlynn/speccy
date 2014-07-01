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

// and spec
// --------

function AndSpec(left, right){
  this.left = left;
  this.right = right;
}

AndSpec.prototype = Object.create(Specification);

AndSpec.prototype.isSatisfiedBy = function(obj){
  var leftSat, rightSat;

  if (this.left && this.left.isSatisfiedBy) {
    leftSat = this.left.isSatisfiedBy(obj);
  }

  if (this.right && this.right.isSatisfiedBy) {
    rightSat = this.right.isSatisfiedBy(obj);
  }

  return leftSat && rightSat;
};

// or spec
// -------

function OrSpec(left, right){
  this.left = left;
  this.right = right;
}

OrSpec.prototype = Object.create(Specification);

OrSpec.prototype.isSatisfiedBy = function(obj){
  var leftSat, rightSat;

  if (this.left && this.left.isSatisfiedBy) {
    leftSat = this.left.isSatisfiedBy(obj);
  }

  if (this.right && this.right.isSatisfiedBy) {
    rightSat = this.right.isSatisfiedBy(obj);
  }

  return leftSat || rightSat;
};

// not spec
// --------

function NotSpec(spec){
  this.spec = spec;
}

NotSpec.prototype = Object.create(Specification);

NotSpec.prototype.isSatisfiedBy = function(obj){
  if (!this.spec || !this.spec.isSatisfiedBy){ 
    return false;
  }

  return !this.spec.isSatisfiedBy(obj);
};

// exports
// -------

module.exports = Specification;
