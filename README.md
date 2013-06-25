# map-vals

Takes an `object` and a `fn` and returns a new object with the same keys, but
with `fn` applied to the values.

## Usage

    var mapVals = require('map-vals');

    function inc(val) {
      return val + 1;
    }

    var numbers = {a: 1, b: 2, c: 3};
    var newNumbers = mapVals(numbers, inc);
    console.log(newNumbers); //=> {a: 2, b: 3, c: 4}
