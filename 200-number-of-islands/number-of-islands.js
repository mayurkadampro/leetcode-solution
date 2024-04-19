/**
 * @param {character[][]} grid
 * @return {number}
 */


const numIslands = function (grid) {
    let count = 0;;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                count++;
                dfs(grid, i, j)
            }
        }
    }
    return count;
};

const outOfBounds = function (grid, r, c) {
    if (r < 0 || c < 0) return true;
    if (r >= grid.length || c >= grid[0].length) return true;
    if (grid[r][c] != 1) return true;
    return false;
}

const dfs = function (grid, row, col) {

    if (outOfBounds(grid, row, col)) return 0;

    grid[row][col] = "";

    dfs(grid, row + 1, col);
    dfs(grid, row - 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row, col - 1);
}