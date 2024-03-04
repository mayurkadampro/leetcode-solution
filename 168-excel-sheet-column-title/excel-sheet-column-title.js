/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    if (columnNumber < 27) return String.fromCharCode(columnNumber + 64);
    let result = '';
    while (columnNumber > 0) {
        let temp = columnNumber % 26;
        temp = temp == 0 ? 26 : temp;
        result = String.fromCharCode(temp + 64) + result;
        columnNumber -= temp;
        columnNumber /= 26;
    }
    return result;
};