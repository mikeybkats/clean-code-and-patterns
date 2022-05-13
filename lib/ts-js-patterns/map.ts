const myArray = [1,2,3,4,5];
type arrayFuncArg<T> = (T, index: number) => any;
interface Array<T> {
  myMap: (arg: arrayFuncArg<T>) => any[];
}

Array.prototype.myMap = function(funcArg: (T, index) => any): any[]{
  const newArray = []

  for(let i = 0; i < this.length; i++){
    newArray.push(funcArg(this[i], i));
  }

  return newArray; 
};


const newArray = myArray.myMap((item, index) => {
  return item + index;
})

console.log(newArray);
