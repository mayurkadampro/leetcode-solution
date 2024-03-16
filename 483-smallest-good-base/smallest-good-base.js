/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function (n) {
    let num = BigInt(n)
    let ans = num - 1n;

    for (let i = 64; i >= 2; i--) {
        // Binary Search
        let left = BigInt(2);
        let right = num - 1n;
        while (left <= right) {
            let mid = BigInt((right - left) / 2n + left);
            let isValid = isValidCompute(mid, i, num);
            if (isValid == 0) {
                return mid.toString();
            }
            if (isValid == 1) {
                right = mid - 1n;
            } else {
                left = mid + 1n;
            }

        }

    }
    return ans.toString();
};

var getBaseLog = (x, y) => {
    return Math.log(x) / Math.log(y);
}

var isValidCompute = (base, digits, targetValue) => {
    let mul = BigInt(1);
    for (let i = 0; i < digits; i++) {
        targetValue -= mul;
        if (i != digits - 1) {
            if (mul > targetValue / base)
                return 1;
        }
        mul = mul * base;
    }
    if (targetValue == 0)
        return 0;
    if (targetValue > 0)
        return -1;
    return 1;
}