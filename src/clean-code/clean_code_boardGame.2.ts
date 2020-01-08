class Cell {
  STATUS_VALUE = 4;
  FLAGGED = 1;
  cell: number[];
  constructor(flagged: number){
    this.cell = [0, 0, 0, 0, flagged];
  }

  public isFlagged(){
    if(this.cell[this.STATUS_VALUE] === this.FLAGGED){
      return true;
    }
    return false;
  }
}

const gameBoard2: Cell[] = [
  new Cell(0), new Cell(1), new Cell(1), new Cell(1) 
];

function getFlaggedCells2(): Cell[] {
  const flaggedCells: Cell[] = [];

  gameBoard2.forEach( cell => {
    if(cell.isFlagged()){
      flaggedCells.push(cell);
    }
  })

  return flaggedCells;
}

console.log(getFlaggedCells2());

