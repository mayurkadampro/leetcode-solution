/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < board.length; i++) {
        let rowsSet = new Set();
        let colsSet = new Set();
        let boxsSet = new Set();

        for (let j = 0; j < board.length; j++) {
            let row = board[i][j];
            let col = board[j][i];
            let box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

            if (row !== '.' && rowsSet.has(row)) {
                return false;
            } else {
                rowsSet.add(row);
            }

            if (col !== '.' && colsSet.has(col)) {
                return false;
            } else {
                colsSet.add(col);
            }

            if (box !== '.' && boxsSet.has(box)) {
                return false;
            } else {
                boxsSet.add(box);
            }
        }
    }
    return true;
};