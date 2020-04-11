"use strict";
class Cell {
    constructor(flagged) {
        this.STATUS_VALUE = 4;
        this.FLAGGED = 1;
        this.cell = [0, 0, 0, 0, flagged];
    }
    isFlagged() {
        if (this.cell[this.STATUS_VALUE] === this.FLAGGED) {
            return true;
        }
        return false;
    }
}
const gameBoard2 = [
    new Cell(0), new Cell(1), new Cell(1), new Cell(1)
];
function getFlaggedCells2() {
    const flaggedCells = [];
    gameBoard2.forEach(cell => {
        if (cell.isFlagged()) {
            flaggedCells.push(cell);
        }
    });
    return flaggedCells;
}
console.log(getFlaggedCells2());
