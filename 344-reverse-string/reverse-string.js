/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let n = s.length;
    let halfLen = Math.floor(n / 2);

    for (let i = 0; i < halfLen; i++, n--) {
        let temp = s[i];
        s[i] = s[n - 1];
        s[n - 1] = temp;
    }
};