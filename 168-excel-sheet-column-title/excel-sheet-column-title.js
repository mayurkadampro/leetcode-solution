/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let res = '';
    columnNumber = columnNumber - 1;
    while (columnNumber >= 0) {
        rem = columnNumber % 26;
        res = str[rem] + res;
        columnNumber = (Math.floor(columnNumber / 26)) - 1;
    }

    return res;
};