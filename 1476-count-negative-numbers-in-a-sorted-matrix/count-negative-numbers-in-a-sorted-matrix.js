/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let row = grid.length - 1;
    let col = 0;
    let res = 0;
    while (row >= 0 && col < grid[0].length) {
        if (grid[row][col] >= 0) {
            col++;
        } else {
            res += grid[0].length - col;
            row--;
        }
    }
    return res;
};