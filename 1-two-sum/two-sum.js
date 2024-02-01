/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let storeMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (storeMap.has(diff)) {
            return [storeMap.get(diff), i]
        }
        storeMap.set(nums[i], i);
    }
    return [];
};