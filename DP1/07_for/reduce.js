function reduce(array, reducer, startingAcc) {
  var acc = startingAcc;
  for (var i = 0; i < array.length; i = i + 1) {
    var item = array[i];
    acc = reducer(acc, item);
  }
  return acc;
}

function sumReducer(acc, item) {
  var result = acc + item;
  return result;
}

var array = [1, 2, 3, 4];
var sum = reduce(array, sumReducer, 0);
console.log(sum, 'typescript');
