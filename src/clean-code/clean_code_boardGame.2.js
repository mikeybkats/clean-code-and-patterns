var Cell = /** @class */ (function () {
    function Cell(flagged) {
        this.STATUS_VALUE = 4;
        this.FLAGGED = 1;
        this.cell = [0, 0, 0, 0, flagged];
    }
    Cell.prototype.isFlagged = function () {
        if (this.cell[this.STATUS_VALUE] === this.FLAGGED) {
            return true;
        }
        return false;
    };
    return Cell;
}());
var gameBoard2 = [
    new Cell(0), new Cell(1), new Cell(1), new Cell(1)
];
function getFlaggedCells2() {
    var flaggedCells = [];
    gameBoard2.forEach(function (cell) {
        if (cell.isFlagged()) {
            flaggedCells.push(cell);
        }
    });
    return flaggedCells;
}
console.log(getFlaggedCells2());
