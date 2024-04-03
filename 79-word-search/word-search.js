/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let result = false;

    var validate = (row, col, k) => {

        // Out of boundary case for recursive call
        if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return;

        // Wrong Character
        if (board[row][col] != word[k]) return;

        // Base case to return from recursive call
        if (k === word.length - 1) {
            result = true;
            return;
        }

        // Change value as null so we dont go back and forth
        board[row][col] = null;

        // try all directions
        validate(row + 1, col, k + 1);
        validate(row - 1, col, k + 1);
        validate(row, col + 1, k + 1);
        validate(row, col - 1, k + 1);

        // Change into real value, reset the board.
        board[row][col] = word[k];
    }

    // Iterative loop
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                if (validate(i, j, 0, board, word, result)) return true;
            }
        }
    }

    return result;
};

