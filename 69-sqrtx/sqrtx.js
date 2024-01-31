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

    /* Third solution
        return Math.floor(Math.sqrt(x));
    */
    // Fourth Solution
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
};