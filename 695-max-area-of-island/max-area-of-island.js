/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
    let maxArea = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(grid, i, j));
            }
        }
    }
    return maxArea;
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

    var up = dfs(grid, row + 1, col);
    var down = dfs(grid, row - 1, col);
    var right = dfs(grid, row, col + 1);
    var left = dfs(grid, row, col - 1);

    return 1 + up + down + left + right;
}