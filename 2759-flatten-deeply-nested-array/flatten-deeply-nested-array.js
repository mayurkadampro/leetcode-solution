/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

// 1st Recursive Solution
// var flat = function (arr, n) {
//     let result = [];
//     var depthFlat = function (arr, count) {
//         for (let i = 0; i < arr.length; i++) {
//             if (toString.call(arr[i]) === "[object Array]" && count < n) {
//                 depthFlat(arr[i], count + 1)
//             } else {
//                 result.push(arr[i]);
//             }
//         }
//         return result;
//     }
//     return depthFlat(arr, 0);
// };

// 2nd Recursive Solution
var flat = function (arr, n, tempArray = []) {
    for (let index = 0; index < arr.length; index++) {
        if (Array.isArray(arr[index]) && n > 0) {
            flat(arr[index], n - 1, tempArray)
        } else {
            tempArray.push(arr[index])
        }
    }
    return tempArray
};

// 3rd Recursive solution by Reduce Method
// var flat = (arr, n) =>
//     n ?
//         arr.reduce(
//             (temp, next) => (
//                 Array.isArray(next) ?
//                     temp.push(...flat(next, n - 1)) :
//                     temp.push(next),
//                 temp
//             ),
//             []
//         ) :
//         arr;
