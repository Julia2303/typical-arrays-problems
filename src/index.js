exports.min = function min (array) {
  return array == undefined || array.length == 0 ? 0 : array.sort((a, b) => a - b)[0];
}

exports.max = function max (array) {
  return array == undefined || array.length == 0 ? 0 : array.sort((a, b) => b - a)[0];
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) {
    return 0;
  } else {
    return array.reduce((a, b) => a + b, 0) / array.length;
  }
}
