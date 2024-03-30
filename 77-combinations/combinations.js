/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [];
    generateCombine(n, k, 1, [], result);
    return result;
};

var generateCombine = (n, k, start, combination, result) => {
    if (combination.length === k) {
        result.push([...combination]);
        return;
    }
    for (let i = start; i <= n; i++) {
        combination.push(i);
        generateCombine(n, k, i + 1, combination, result);
        combination.pop();
    }
}