/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // Solution #1 - Built-in function
    // return haystack.indexOf(needle);

    // Solution #2 - Find Position with Regex
    // const regex = new RegExp(needle);
    // return haystack.search(regex);

    // Solution #3 - Brute Force Time: O(N*M)
    if (!needle) return 0;
    if (haystack.length < needle.length) return -1;

    for (let i = 0; i < haystack.length; i++) {
        let isMatch = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) return i;
    }
    return -1;
};