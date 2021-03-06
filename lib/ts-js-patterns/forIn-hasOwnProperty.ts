interface IHuman {
  hands: number;
  feet: number;
  brains: number;
}

'Hello World'

const human: IHuman = {
  hands: 2,
  feet: 2,
  brains: 1
}

interface Object {
  clone: () => void;
}

if ( typeof Object.prototype.clone === "undefined") {
  Object.prototype.clone = function (){};
}

for (let i in human){
  if (human.hasOwnProperty(i)){
    console.log(i, ":", human[i]);
  } 
}

// can also call off the prototype to get the same result
// it's best not to augment native Object and Array prototypes though
for (var i in human){
  if (Object.prototype.hasOwnProperty.call(human, i)){
    console.log("call ver", i, ":", human[i]);
  }
}
