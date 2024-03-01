/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    let max = 0;
    let chunkCount = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(arr[i], max);
        if (max === i) chunkCount++;
    }
    return chunkCount;
};