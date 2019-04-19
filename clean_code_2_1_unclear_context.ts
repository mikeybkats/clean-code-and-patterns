const printGuessStatistics = (candidate: string, count: number) => {
  let number: string;
  let verb: string; 
  let pluralModifier: string;

  if (count === 0){
    number = "no";
    verb = "are";
    pluralModifier = "s";
  } else if (count ===1 ){
    number = "1";
    verb = "is";
    pluralModifier = "";
  } else {
    number = count.toString();
    verb = "are";
    pluralModifier = "s";
  }
  console.log(`There ${verb} ${number} ${candidate}${pluralModifier}`);
}

printGuessStatistics("hello", 5);
printGuessStatistics("hello", 1);
