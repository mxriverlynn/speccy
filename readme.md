# Speccy

Simple JavaScript specification pattern for NodeJS and Browserify apps.

## Basic Use

`npm install speccy` to install it.

```js
// create a specification object

function HasValue(attr){
  this.attr = attr;
}

HasValue.prototype = Object.create(Specification);

HasValue.prototype.isSatisfiedBy = function(obj){
  if (!obj){ return false; }

  return obj[this.attr] !== undefined;
};

// use it

var hasFoo = new HasValue("foo");
var hasBar = new HasValue("Bar");
var hasBaz = new HasValue("Baz");

// build a compound spec using and/or/not
var mySpec = hasFoo.and(
  (
    hasBar.not(hasBaz)
  ).or(
    hasBaz.not(hasBar)
  )
);

// run the specs
console.log(mySpec.isSatisfiedBy({
  foo: "something",
  bar: "another thing"
})); //=> true

console.log(mySpec.isSatisfiedBy({
  foo: "something",
  baz: "third thing"
})); //=> true

console.log(mySpec.isSatisfiedBy({
  foo: "something",
  bar: "another thign",
  baz: "third thing"
})); //=> false
```

For more examples, see the tests in the `tests` folder.

## Legal Junk

Copyright &copy;2014 Muted Solutions, LLC. All Rights Reserved.

Distributed under [MIT License](http://mutedsolutions.mit-license.org).
