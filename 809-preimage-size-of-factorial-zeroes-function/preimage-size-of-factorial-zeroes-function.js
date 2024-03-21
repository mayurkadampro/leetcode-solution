/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function (k) {
    let left = 0;
    let right = k + 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let count = checkCount(mid);
        if (count > k) {
            right = mid - 1;
        } else if (count < k) {
            left = mid + 1;
        } else {
            return 5
        }
    }
    return 0;
};

// checkCount calculate the factorial of mid & return the count;
function checkCount(mid) {
    let result = mid;
    while (mid > 0) {
        mid = Math.floor(mid / 5);
        result += mid;
    }
    return result
}

