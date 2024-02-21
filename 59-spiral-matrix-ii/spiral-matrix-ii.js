/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let count = 0;
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

    while (left <= right && top <= bottom) {

        for (let i = left; i <= right; i++) {
            count++;
            matrix[top][i] = count;
        }
        top++;


        for (let i = top; i <= bottom; i++) {
            count++;
            matrix[i][right] = count;
        }
        right--;

        if (left <= right && top <= bottom) {
            for (let i = right; i >= left; i--) {
                count++;
                matrix[bottom][i] = count;
            }
            bottom--;
        }
        if (left <= right && top <= bottom) {
            for (let i = bottom; i >= top; i--) {
                count++;
                matrix[i][left] = count;
            }
            left++;
        }
    }
    return matrix;
};