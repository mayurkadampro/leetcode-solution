/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    // if (columnNumber < 27) return String.fromCharCode(columnNumber + 64);
    // let result = '';
    // while (columnNumber > 0) {
    //     let r = columnNumber % 26;
    //     let q = parseInt(columnNumber / 26);
    //     if (r === 0) {
    //         r = 26;
    //         q--;
    //     }
    //     result = String.fromCharCode(64 + r) + result;
    //     columnNumber = q;
    // }
    // return result;
    let str = '';

    while (columnNumber > 0) {

        columnNumber--;
        str += String.fromCharCode((columnNumber % 26) + 65);
        columnNumber = Math.floor(columnNumber / 26);
    }

    // Reverse the string.
    str = str.split('').reverse().join('');
    return str;
};