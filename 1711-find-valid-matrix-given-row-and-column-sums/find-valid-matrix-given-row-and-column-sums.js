/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    let numRows = rowSum.length;
    let numCols = colSum.length;
    let result = new Array(numRows).fill(0).map(() => new Array(numCols).fill(0));

    let i = 0, j = 0;
    while (i < numRows && j < numCols) {
        let val = Math.min(rowSum[i], colSum[j]);
        result[i][j] = val;
        rowSum[i] -= val;
        colSum[j] -= val;

        if (rowSum[i] === 0) {
            i++;
        }
        if (colSum[j] === 0) {
            j++;
        }
    }

    return result;
};