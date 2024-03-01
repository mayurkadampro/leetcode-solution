/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    // 1st solution - Diagonal search from top right - O(m + n)
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

    // 2nd solution - Binary search in each row - O(mlog n)
    // for (let i = 0; i < matrix.length; i++) {
    //     let left = 0;
    //     let right = matrix[0].length - 1;

    //     while (left <= right) {
    //         let mid = Math.floor((left + right) / 2);
    //         if (matrix[i][mid] > target) {
    //             right = mid - 1;
    //         } else if (matrix[i][mid] < target) {
    //             left = mid + 1;
    //         } else {
    //             return true;
    //         }
    //     }
    // }
    // return false;

    // 3rd solution - Binary search complete matrix - O(log mn)
    // let left = 0;
    // let right = (matrix.length * matrix[0].length) - 1;
    // while (left <= right) {
    //     let mid = Math.floor((left + right) / 2);
    //     let midNum = matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length];
    //     if (midNum > target) {
    //         right = mid - 1;
    //     } else if (midNum < target) {
    //         left = mid + 1;
    //     } else {
    //         return true;
    //     }
    // }
    // return false;
};