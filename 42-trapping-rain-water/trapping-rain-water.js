/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // time O(n)
    // space O(1)
    if (height == null || height.length === 0) return 0;
    let l = 0;
    let r = height.length - 1;
    let lMax = height[l];
    let rMax = height[r];
    let res = 0;
    while (l < r) {
        if (lMax < rMax) {
            l++;
            lMax = Math.max(lMax, height[l]);
            res += lMax - height[l];
        } else {
            r--;
            rMax = Math.max(rMax, height[r]);
            res += rMax - height[r];
        }
    }
    return res;
};