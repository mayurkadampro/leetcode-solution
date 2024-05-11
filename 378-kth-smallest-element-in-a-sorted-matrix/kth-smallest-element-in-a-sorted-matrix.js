/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let row = matrix.length - 1;
    let col = matrix[0].length - 1;
    let lo = matrix[0][0];
    let hi = matrix[row][col];
    console.log(lo, hi);
    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        let count = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (matrix[i][j] <= mid) count++;
                else break;
            }
        }
        if (count < k) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
};