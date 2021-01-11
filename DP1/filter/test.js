function filter(fn, arr) {
  newArr = [];

  for(let i = 0; i < arr.length; i = i + 1) {
    if(fn(arr[i])) {
      newArr.push(arr[i]);
     }
   }

   return newArr;
}

const seq = [1,2,3,4,5,6]
const even = filter(x => x % 2 == 0, seq);

console.log(even);
