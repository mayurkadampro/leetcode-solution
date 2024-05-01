/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let map = new Map();
    let resultMap = new Map();
    for (let val of nums1) {
        map.set(val, (map.get(val) || 0) + 1);
    }

    for (let val of nums2) {
        if (map.has(val)) {
            resultMap.set(val, (resultMap.get(val) || 0) + 1);
        }
    }

    return Array.from(resultMap.keys());
};