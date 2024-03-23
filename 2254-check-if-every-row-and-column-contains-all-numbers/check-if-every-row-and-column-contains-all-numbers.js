/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    for (let i = 0; i <= matrix.length - 1; i++) {
        const rowSet = new Set();
        const colSet = new Set();
        for (let j = 0; j <= matrix.length - 1; j++) {
            if (rowSet.has(matrix[i][j])) return false;
            if (colSet.has(matrix[j][i])) return false;
            rowSet.add(matrix[i][j]);
            colSet.add(matrix[j][i]);
        }
    }
    return true;
};