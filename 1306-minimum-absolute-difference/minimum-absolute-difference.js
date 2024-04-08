/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    // 1st solution
    // const ans = [];
    // arr.sort((a, b) => a - b);
    // let minDiff = Infinity;

    // for (let i = 1; i < arr.length; i++) {
    //     minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
    // }

    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] - arr[i - 1] === minDiff) {
    //         ans.push([arr[i - 1], arr[i]]);
    //     }
    // }
    // return ans;


    let minDiff = Infinity;
    let output = [];
    arr.sort((a, b) => a - b);

    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
            output = [[arr[i - 1], arr[i]]];
        } else if (diff === minDiff) {
            output.push([arr[i - 1], arr[i]]);
        }
    }

    return output;
};