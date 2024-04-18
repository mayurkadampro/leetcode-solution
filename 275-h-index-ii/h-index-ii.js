/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let N = citations.length
    let left = 0;
    let right = N - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (citations[mid] >= N - mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return N - left;
};