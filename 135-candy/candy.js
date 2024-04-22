/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let n = ratings.length;
    let result = new Array(n).fill(1);

    // left to right
    for (let i = 1; i < n; i++) {
        if (ratings[i - 1] < ratings[i]) {
            result[i] = result[i - 1] + 1;
        }
    }

    // right to left
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            result[i] = Math.max(result[i], result[i + 1] + 1);
        }
    }

    return result.reduce((pre, curr) => pre + curr, 0);
};