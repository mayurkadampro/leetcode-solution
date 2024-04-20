/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // Solution #1 - Built-in function
    // return haystack.indexOf(needle);

    // Solution #2 - Find Position with Regex
    const regex = new RegExp(needle);
    return haystack.search(regex);
};