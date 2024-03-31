/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const result = [];
    generatePowerset(k, [], 1, result, n);
    return result;
};


var generatePowerset = (k, currentSet, index, result, target) => {
    if (target < 0) return;
    if (target === 0 && currentSet.length === k) {
        result.push([...currentSet]);
    }
    for (let i = index; i <= 9; i++) {
        currentSet.push(i);
        generatePowerset(k, currentSet, i + 1, result, target - i);
        currentSet.pop();
    }
}