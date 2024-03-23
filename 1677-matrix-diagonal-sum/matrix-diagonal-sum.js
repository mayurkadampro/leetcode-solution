/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let row = mat.length - 1;
    let col = mat[0].length - 1;
    let sum = 0;
    for (let i = 0; i <= row; i++, col--) {
        sum += mat[i][i];
        sum += mat[i][col];
    }
    return row % 2 === 0 ? sum - mat[Math.floor(row / 2)][Math.floor(row / 2)] : sum;
};