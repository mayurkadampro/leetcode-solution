/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    if (mat.length * mat[0].length != r * c) {
        return mat;
    }
    let resultMatrix = new Array(r).fill(0).map(() => new Array(c).fill(0));
    for (let i = 0; i < r * c; i++) {
        resultMatrix[Math.floor(i / c)][i % c] = mat[Math.floor(i / mat[0].length)][i % mat[0].length];
    }
    return resultMatrix;
};