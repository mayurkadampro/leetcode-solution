/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {


    let sPointer = 0;
    let tPointer = 0;

    while (sPointer < s.length) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
            tPointer++;
        } else {
            sPointer++;
        }
    }
    return t.length - tPointer;
};