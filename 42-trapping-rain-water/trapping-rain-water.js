/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // time O(n)
    // space O(1)
    // Two Pointer
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


    // 2nd Solution
    // Time O(N ^ 2)
    // Space O(N)
    // const size = height.length;
    // const leftMax = new Array(size);
    // leftMax[0] = height[0];

    // const rightMax = new Array(size);
    // rightMax[size - 1] = height[size - 1];
    // let res = 0;

    // // find the height of left wall for each elevation
    // for (let i = 1; i < size; i++) {
    //     leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    // }

    // // find the height of right wall for each elevation
    // for (let i = size - 2; i >= 0; i--) {
    //     rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    // }

    // // the height of the water for each elevation would be the 
    // // the height of the shorter wal minus the elevation height
    // for (let i = 1; i < size - 1; i++) {
    //     res += Math.min(leftMax[i], rightMax[i]) - height[i]
    // }

    // return res;
};