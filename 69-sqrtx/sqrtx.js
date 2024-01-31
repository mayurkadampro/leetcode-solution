/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    /* First Solution
        let val = 0;
        while((val * val) <= x) val++;
        return val - 1;
    */

    /* Second Solution 
        return Math.floor(x**(1/2));
    */

    // Third solution
    let left = 0;
    let right = x;
    let result = 0;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid * mid > x) {
            right = mid - 1
        } else if (mid * mid < x) {
            left = mid + 1;
            result = mid
        } else {
            return mid;
        }
    }
    return result;
    // let i = 1, j = x, ans = 0;
    // while (i <= j) {
    //     let mid = i + Math.floor((j - i) / 2);

    //     if (mid * mid <= x) {
    //         i = mid + 1;
    //         ans = mid;
    //     }
    //     else
    //         j = mid - 1;
    // }
    //return ans;
};