/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let sum = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        var letter2Num = columnTitle.charCodeAt(i) - 64;
        sum = sum + Math.pow(26, columnTitle.length - 1 - i) * letter2Num;
    }
    return sum;
};