/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let matLength = mat.length;
    let sum = 0;

    for(let i=0; i<matLength; i++){
        sum += mat[i][i];
        sum += mat[i][matLength - 1 - i];
    }

    return sum - (matLength % 2 !== 0 ? mat[Math.floor(matLength / 2)][Math.floor(matLength / 2)] : 0)
};