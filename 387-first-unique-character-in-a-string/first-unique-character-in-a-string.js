/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s.length == 0) return -1;
    for (let idx = 0; idx < s.length; idx++) {
        if (s.indexOf(s[idx]) === s.lastIndexOf(s[idx])) {
            return idx
        }
    }
    return -1
};