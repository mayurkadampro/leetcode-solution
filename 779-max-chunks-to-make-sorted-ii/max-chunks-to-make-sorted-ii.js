/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    let rmin = new Array(arr.length).fill(0);
    rmin[arr.length] = Number.MAX_SAFE_INTEGER;

    for (let i = arr.length - 1; i >= 0; i--) {
        rmin[i] = Math.min(arr[i], rmin[i + 1])
    }

    let lmax = arr[0]
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        lmax = Math.max(arr[i], lmax);
        if (lmax <= rmin[i + 1]) {
            count++;
        }
    }

    return count;
};