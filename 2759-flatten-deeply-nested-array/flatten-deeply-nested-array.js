/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let result = [];

    var flatternArray = function (arr, count) {
        for (let i = 0; i < arr.length; i++) {
            if (toString.call(arr[i]) === "[object Array]" && count < n) {

                flatternArray(arr[i], count + 1)
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    }

    return flatternArray(arr, 0);
};

