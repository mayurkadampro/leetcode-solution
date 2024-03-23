/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    let row = matrix.length - 1;
    let col = matrix[0].length - 1;

    for (let i = 0; i <= row; i++) {
        const rowSet = new Set();
        const colSet = new Set();

        for (let j = 0; j <= col; j++) {
            if (rowSet.has(matrix[i][j])) return false;
            if (colSet.has(matrix[j][i])) return false;
            
            rowSet.add(matrix[i][j]);
            colSet.add(matrix[j][i]);
        }
    }
    return true;
};