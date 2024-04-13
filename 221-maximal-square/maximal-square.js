/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    // TC - O(m*n), SC - O(N)
    // if (!matrix.length) return 0;
    // let dp = new Array(matrix.length + 1).fill(0).map(() => new Array(matrix[0].length + 1).fill(0));
    // let max = 0;
    // for (let r = 1; r < dp.length; r++) {
    //     for (let c = 1; c < dp[0].length; c++) {
    //         if (matrix[r - 1][c - 1] != 0) {
    //             dp[r][c] = Math.min(dp[r][c - 1], dp[r - 1][c], dp[r - 1][c - 1]) + 1;
    //             max = Math.max(dp[r][c], max);
    //         }
    //     }
    // }
    // return max ** 2;


    // TC - O(m*n), SC - O(1)
    let max = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === "0") continue
            if (i > 0 && j > 0)
                matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1
            max = Math.max(matrix[i][j], max)
        }
    }
    return max ** 2

};