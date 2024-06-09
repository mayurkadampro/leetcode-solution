/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    const result = [];
    helper("(", 1, 0, n, result);
    return result;
};

const helper = (currStr, openBracketCount, closeBracketCount, n, result) => {
    // Base Case
    if (openBracketCount === n && closeBracketCount === n) {
        result.push(currStr);
        return;
    }

    if (openBracketCount < n) {
        helper(currStr + "(", openBracketCount + 1, closeBracketCount, n, result);
    }

    if (openBracketCount > closeBracketCount) {
        helper(currStr + ")", openBracketCount, closeBracketCount + 1, n, result);
    }
}


