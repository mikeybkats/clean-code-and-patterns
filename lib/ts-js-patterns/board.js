function makeBoard(boardSize) {
    var grid = [];
    for (var i = 0; i < boardSize * boardSize; i++) {
        grid.push("*");
    }
    grid.forEach(function (column, index) {
        //if(index === 0){
        //process.stdout.write(column);
        //}
        if (index % boardSize) {
            process.stdout.write(column);
        }
        if ((index !== 0) && !(index % boardSize)) {
            process.stdout.write("\n");
        }
        if (index === boardSize * boardSize - 1) {
            process.stdout.write("\n\n");
        }
    });
}
makeBoard(10);
