function map(array, callback) {
   for (var i = 0; i < array.length; i++){
       let value=array[i]*2
   }
}

const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2);
console.log(mappedArray);