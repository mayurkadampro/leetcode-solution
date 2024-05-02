/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let set = new Set(nums);
    let largestPostivieInteger = -1;

    for (let num of set) {
        if (num > 0 && set.has(-num)) {
            largestPostivieInteger = Math.max(largestPostivieInteger, num)
        }
    }

    return largestPostivieInteger;
};