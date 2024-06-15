/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let map = new Map();
    let str = s.split(" ");

    if (pattern.length != str.length) return false;
    if (new Set(str).size != new Set(pattern).size) return false;

    for (let i = 0; i < str.length; i++) {
        if (!map.has(pattern[i])) {
            map.set(pattern[i], str[i]);
        }
    }


    for (let i = 0; i < pattern.length; i++) {
        if (!map.has(pattern[i]) || map.get(pattern[i]) !== str[i]) {
            return false;
        }
    }

    return true;
};