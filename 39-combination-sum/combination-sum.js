/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];
    generatePowerset(candidates, [], 0, result, target);
    return result;
};


var generatePowerset = (candidates, currentSet, startIndex, result, target) => {
    if (target === 0) return result.push([...currentSet]);
    if (target < 0) return;
    for (let i = startIndex; i < candidates.length; i++) {
        currentSet.push(candidates[i]);
        generatePowerset(candidates, currentSet, i, result, target - candidates[i]);
        currentSet.pop();
    }
}