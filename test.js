var test = require('tape'),
    mapVals = require('./index.js');

test('mapVals', function(t) {
  t.plan(1);
  var obj = {a: 1, b: 2, c: 3};
  var newObj = mapVals(obj, function(val) { return val + 1; });
  t.deepEqual(newObj, {a: 2, b: 3, c: 4});
});
