// HasValue Sample Spec
// --------------------

function HasValue(attr){
  this.attr = attr
}

HasValue.prototype = Object.create(Specification);

HasValue.prototype.isSatisfiedBy = function(obj){
  if (!obj){ return false; }

  return obj[this.attr] != undefined;
}

module.exports = HasValue;
