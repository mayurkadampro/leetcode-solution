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
    if (index === s.length) {
        result.push(str);
        return;
    } else if (isAlpha(s[index])) {

        
        
        // in the case the current character is an upper alphabet, we want a permutation with a lower alphabet
        if (s.charAt(index) >= 'A' && s.charAt(index) <= 'Z') {
            helper(s, result, str + s.charAt(index).toLowerCase(), index + 1)
        }
        // in the case the current character is a lower alphabet we want a permutation with an upper alphabet
        if (s.charAt(index) >= 'a' && s.charAt(index) <= 'z') {
            helper(s, result, str + s.charAt(index).toUpperCase(), index + 1)
        }

    }


    // no matter what we proceed with the original permutation
    helper(s, result, str + s.charAt(index), index + 1);
}

const isAlpha = function (ch) {
    return /[a-zA-Z]/i.test(ch)
}