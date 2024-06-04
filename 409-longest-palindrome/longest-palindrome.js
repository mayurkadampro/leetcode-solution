/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = new Map();
    let oddFreqCount = 0;
    for (value of s) {
        map.set(value, (map.get(value) || 0) + 1);
        if (map.get(value) % 2 === 1) {
            oddFreqCount++;
        } else {
            oddFreqCount--;
        }
    }
    if (oddFreqCount > 1) {
        return s.length - oddFreqCount + 1;
    }
    return s.length;
};