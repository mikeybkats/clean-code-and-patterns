const STATUS_VALUE = 4;
const FLAGGED = 1;
const gameBoard: number[][] = [
  [0, 0, 0, 0, 1]
];

function getFlaggedCells(): number[][] {
  const flaggedCells: number[][] = [];

  gameBoard.forEach( cell => {
    if(cell[STATUS_VALUE] === FLAGGED){
      flaggedCells.push(cell);
    }
  })

  return flaggedCells;
}

console.log(getFlaggedCells());

