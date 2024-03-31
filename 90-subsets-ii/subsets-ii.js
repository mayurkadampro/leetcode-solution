/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    generateSubSet(nums, 0, [], result);
    return result;
};

var generateSubSet = (nums, startingIndex, currentSet, result) => {
    result.push([...currentSet]);

    for (let i = startingIndex; i < nums.length; i++) {
        if (i > startingIndex && nums[i] === nums[i - 1]) continue
        currentSet.push(nums[i]);
        generateSubSet(nums, i + 1, currentSet, result);
        currentSet.pop();
    }
}


