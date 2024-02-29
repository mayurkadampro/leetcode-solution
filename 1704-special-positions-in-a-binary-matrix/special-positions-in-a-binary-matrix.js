/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    if (mat.length < 1) return mat;
    let count = 0;

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] && isValidRow(i) && isValidCol(j)) {
                count++;
            }
        }
    }

    function isValidRow(index) {
        let count = 0
        let row = mat[index]
        for (let i = 0; i < row.length; i++) {
            if (row[i] === 1) {
                count++
            }
        }
        if (count > 1) {
            return false
        } else {
            return true
        }
    }

    function isValidCol(index) {
        let count = 0
        for (let i = 0; i < mat.length; i++) {
            let row = mat[i]
            if (row[index] === 1) {
                count++
            }
        }
        if (count > 1) {
            return false
        } else {
            return true
        }
    }

    return count;
};  