/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    if ((m * n) !== original.length) return [];
    let resultArray = [];
    for (let i = 0; i < original.length; i += n) {
        resultArray.push(original.slice(i, i + n))
    }
    return resultArray;
};