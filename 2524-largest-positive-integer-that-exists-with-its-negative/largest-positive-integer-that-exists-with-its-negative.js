/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let map = new Map();
    let largestPostivieInteger = -1;

    for (let value of nums) {
        map.set(value, (map.get(value) || 0) + 1);
    }


    for (let [key, value] of map) {
        if (key > 0 && map.has(-key)) {
            largestPostivieInteger = Math.max(largestPostivieInteger, key)
        }
    }

    return largestPostivieInteger;
};