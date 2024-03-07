/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let pathArray = new Array(m).fill(1).map(() => new Array(n).fill(1));
    let row = pathArray.length;
    let col = pathArray[0].length
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            pathArray[i][j] = pathArray[i - 1][j] + pathArray[i][j - 1];
        }
    }
    return pathArray[row - 1][col - 1];
};