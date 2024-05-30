/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    if (!g.length || !s.length) return 0;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);


    let i = 0;
    let j = 0;
    let result = 0;

    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            result++;
            i++
        }
        j++;
    }


    return result;
};