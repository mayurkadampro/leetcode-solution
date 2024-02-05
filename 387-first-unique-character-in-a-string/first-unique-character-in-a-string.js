/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s.length == 0) return -1;
    // By inbuild method
    // for (let idx = 0; idx < s.length; idx++) {
    //     if (s.indexOf(s[idx]) === s.lastIndexOf(s[idx])) {
    //         return idx
    //     }
    // }

    let mp = {};

    for (let a of s) {
        mp[a] = (mp[a] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (mp[s[i]] === 1) {
            return i;
        }
    }

    return -1
};