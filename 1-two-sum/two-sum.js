/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let uniqueMap = new Map();
    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i];
        if(uniqueMap.has(diff)){
            return [uniqueMap.get(diff), i]
        }
        uniqueMap.set(nums[i], i);
    }
    return [];
};