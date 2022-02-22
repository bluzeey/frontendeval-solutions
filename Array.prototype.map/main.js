function map(array, callback) {
   for(let i=0;i<=array.length;i++){
       let newArray=[]
       let value=array[i]
       let updatedValue=callback(value)
       newArray.push(updatedValue)
   }
   return newArray
}

const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2);
console.log(mappedArray);