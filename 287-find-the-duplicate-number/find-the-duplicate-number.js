/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let keyMap = new Map();
    for (let element of nums) {
        if (keyMap.has(element)) {
            return element;
        }
        keyMap.set(element)
    }
    return -1;  // Just to satisfy the compiler, this should never be reached
};