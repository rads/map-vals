function mapVals(object, fn) {
  var accumulator = {};
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      accumulator[key] = fn(object[key]);
    }
  }
  return accumulator;
};

module.exports = mapVals;
