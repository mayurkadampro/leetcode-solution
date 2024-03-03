/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    const result = new Array(col).fill(0).map(() => new Array(row).fill(0));
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            result[c][r] = matrix[r][c];
        }
    }

    return result;
};