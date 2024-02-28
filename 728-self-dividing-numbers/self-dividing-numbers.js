/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    const result = [];
    for (let i = left; i <= right; i++) {
        if (isDivingNumber(i)) result.push(i);
    }
    return result;
};

var isDivingNumber = function (num) {
    const numString = num.toString();
    for (let i = 0; i < numString.length; i++) {
        if (numString[i] === '0' || num % Number(numString[i]) !== 0) return false;
    }
    return true;
}