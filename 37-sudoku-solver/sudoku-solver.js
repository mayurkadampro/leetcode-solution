/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function (board) {
    const n = board.length;
    dfs(board, n);
};

const dfs = function (board, n) {
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] === ".") {
                // try every number 1-9
                for (let i = 1; i <= 9; i++) {
                    const c = i.toString();
                    if (isValidSudoku(board, row, col, n, c)) {
                        board[row][col] = c;
                        // continue search for that board, ret true if solution is reached
                        if (dfs(board, n)) return true;
                    }
                }

                // solution wasnt found for any num 1-9 here, must be a dead end...
                board[row][col] = '.';
                return false;
            }
        }
    }
    // all cells filled, must be a solution
    return true;
}

const isValidSudoku = function (board, row, col, n, c) {
    const blockRow = Math.floor(row / 3) * 3;
    const blockCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < n; i++) {
        // check on same row & same column
        if (board[row][i] === c || board[i][col] === c) return false;

        // check on 3*3 block
        const curRow = blockRow + Math.floor(i / 3);
        const curCol = blockCol + Math.floor(i % 3);
        if (board[curRow][curCol] === c) return false;
    }
    return true;
};