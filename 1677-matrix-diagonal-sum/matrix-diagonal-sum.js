/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    // let matLength = mat[0].length;
    // // Calulate Primary & Secondary Diagonal Sum
    // let sum = 0;
    // for (let i = 0; i < matLength; i++) {
    //     sum += mat[i][i];
    //     sum += mat[i][mat[i].length - i - 1];
    // }
    // if (matLength % 2 !== 0) return sum - mat[Math.floor(matLength / 2)][Math.floor(matLength / 2)];
    // return sum;

    let sum = 0;
    let j = mat[0].length - 1;
    for (let i = 0; i < mat.length; i++, j--) {
        if (i !== j) {
            sum += mat[i][j];
        }
        sum += mat[i][i]
    }
    return sum;
};