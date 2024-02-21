/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const res = [];
    let d = 0;

    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

    while (left <= right && top <= bottom) {
        if (d == 0) {
            for (let i = left; i <= right; i++) {
                res.push(matrix[top][i]);
            }
            d = 1; top++;
        } else if (d == 1) {
            for (let i = top; i <= bottom; i++) {
                res.push(matrix[i][right]);
            }
            d = 2; right--;
        } else if (d == 2) {
            for (let i = right; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
            d = 3; bottom--;
        } else if (d == 3) {
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            d = 0; left++;
        }
    }
    return res;
};