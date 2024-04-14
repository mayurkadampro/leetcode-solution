/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let majorityCount = Math.floor(nums.length / 2);
    let map = new Map();
    for (let value of nums) {
        map.set(value, (map.get(value) || 0) + 1);        
        if(map.get(value) > majorityCount){
            return value;
        }
    }
    return 0;
};