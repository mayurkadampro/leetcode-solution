/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((acc, curr) => acc += curr, 0);
    let leftSum = 0;
    for(let i=0; i<nums.length; i++){
        const rightSum = sum - leftSum - nums[i];
        if(rightSum === leftSum){
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};