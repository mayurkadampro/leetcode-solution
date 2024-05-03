/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
    // Two Pointer
    let i = 0, j = 0;
    while (i < version1.length || j < version2.length) {
        const result1 = helper(version1, i);
        const result2 = helper(version2, j);
        const v1 = result1[0], v2 = result2[0];
        i = result1[1]; j = result2[1];
        if (v1 > v2) return 1;
        else if (v1 < v2) return -1;
    }
    return 0;
};

const helper = function (s, idx) {
    let num = 0;
    while (idx < s.length) {
        if (s[idx] === '.') break;
        else num = num * 10 + parseInt(s[idx]);
        idx++;
    }
    return [num, idx + 1];
};