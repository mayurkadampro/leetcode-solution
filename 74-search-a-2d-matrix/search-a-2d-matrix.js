/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length < 1) return false;

    //start with top-right element
    var row = 0;
    var col = matrix[0].length - 1;

    //loop till row and column number are within bounds
    while (row <= matrix.length - 1 && col >= 0) {
        if (matrix[row][col] > target) {
            col--;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            return true;
        }
    }
    return false;
};