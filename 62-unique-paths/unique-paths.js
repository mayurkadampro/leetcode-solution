/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let pathArray = new Array(m).fill(0).map(() => new Array(n).fill(1));
    for (let i = 1; i < pathArray.length; i++) {
        for (let j = 1; j < pathArray[0].length; j++) {
            pathArray[i][j] = pathArray[i - 1][j] + pathArray[i][j - 1];
        }
    }
    return pathArray[pathArray.length - 1][pathArray[0].length - 1];
};