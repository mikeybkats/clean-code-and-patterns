var STATUS_VALUE = 4;
var FLAGGED = 1;
var gameBoard = [
    [0, 0, 0, 0, 1]
];
function getFlaggedCells() {
    var flaggedCells = [];
    gameBoard.forEach(function (cell) {
        if (cell[STATUS_VALUE] === FLAGGED) {
            flaggedCells.push(cell);
        }
    });
    return flaggedCells;
}
console.log(getFlaggedCells());
