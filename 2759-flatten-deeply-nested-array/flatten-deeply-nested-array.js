/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    // 1st Recursive Solution
    let result = [];
    var depthFlat = function (arr, count) {
        for (let i = 0; i < arr.length; i++) {
            if (toString.call(arr[i]) === "[object Array]" && count < n) {
                depthFlat(arr[i], count + 1)
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    }
    return depthFlat(arr, 0);
};

