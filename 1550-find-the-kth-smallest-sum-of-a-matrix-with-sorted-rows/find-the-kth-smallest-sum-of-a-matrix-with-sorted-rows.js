/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (mat, k) {

    let row = mat.length;
    let col = mat[0].length;
    let temp = mat[0];

    for (let i = 1; i < row; i++) {
        let cur = [];
        for (let j = 0; j < col; j++) {
            for (let l = 0; l < temp.length; l++) {
                cur.push(temp[l] + mat[i][j])
            }
        }
        cur = cur.sort((a, b) => a - b);
        temp = [];

        let maxSize = Math.min(k + 1, cur.length)
        for (let j = 0; j < maxSize; j++) {
            temp.push(cur[j])
        }
    }

    return temp[k - 1]
};

