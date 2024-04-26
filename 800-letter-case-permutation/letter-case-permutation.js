/**
 * @param {string} s
 * @return {string[]}
 */
const letterCasePermutation = function (s) {
    const result = []
    helper(s, result, "", 0);
    return result;
};

const helper = function (s, result, str, index) {

    // base case
    if (index === s.length || str.length === s.length) {
        result.push(str);
        return;
    } else if (isAlpha(s[index])) {

        let up = str + s[index].toUpperCase();
        let low = str + s[index].toLowerCase();
        helper(s, result, up, index + 1);
        helper(s, result, low, index + 1);
    } else {
        // no matter what we proceed with the original permutation
        helper(s, result, str + s[index], index + 1);
    }
}

const isAlpha = function (ch) {
    return /[a-zA-Z]/i.test(ch)
}