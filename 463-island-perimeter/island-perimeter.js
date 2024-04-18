/**
 * @param {number[][]} grid
 * @return {number}
 */

// Simple Solution
// var islandPerimeter = function (grid) {

//     let height = grid.length;
//     let width = grid[0].length;
//     let result = 0;

//     for (let row = 0; row < height; row++) {
//         for (let col = 0; col < width; col++) {
//             if (grid[row][col] === 1) {
//                 // TOP
//                 if (row > 0 && grid[row - 1][col] === 0 || row === 0) {
//                     result++;
//                 }

//                 // Bottom
//                 if (row < height - 1 && grid[row + 1][col] === 0 || row === height - 1) {
//                     result++;
//                 }

//                 // left
//                 if (col > 0 && grid[row][col - 1] === 0 || col === 0) {
//                     result++;
//                 }

//                 // RIGHT
//                 if (col < width - 1 && grid[row][col + 1] === 0 || col === width - 1) {
//                     result++;
//                 }
//             }
//         }
//     }
//     return result;
// };

// DFS SOLUTION
var islandPerimeter = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                return dfs(grid, i, j);
            }
        }
    }
};

const dfs = function (grid, i, j) {
    //bc
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) return 1;
    if (grid[i][j] === "") return 0;

    //cd
    grid[i][j] = "";
    let perimeter = dfs(grid, i - 1, j) + dfs(grid, i + 1, j) + dfs(grid, i, j - 1) + dfs(grid, i, j + 1);
    return perimeter;
}