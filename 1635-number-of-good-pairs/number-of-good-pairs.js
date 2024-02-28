/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let pairNum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++){
            if(i < j && nums[i] === nums[j]){
                pairNum += 1;
            }
        }
    }
    return pairNum;
};