/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    let n = grid.length;
    const res = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0));
    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            res[i][j] = findMax(grid, i, j);
        }
    }
    return res;
};

const findMax = (grid, start, end) => {
    let maxElement = grid[start][end];
    for (let i = start; i < start + 3; i++) {
        for (let j = end; j < end + 3; j++) {
            maxElement = Math.max(maxElement, grid[i][j]);
        }
    }
    return maxElement;
}