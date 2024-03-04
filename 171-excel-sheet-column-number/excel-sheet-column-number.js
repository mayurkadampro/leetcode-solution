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


/*
In deciaml representation, for example, 123 would mean 1x10^2 + 2x10^1 + 3x10^0
In excel column title, for example, ABC would mean 1x26^2 + 2x26^1 + 3x26^0
We can use charCodeAt to convert letter to number, but it is offset by 64, so we need to subtract 64.
*/