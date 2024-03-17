/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
    // Sort your array from lowest to highest.
    position.sort((a, b) => a - b);
    let left = 0;
    let right = position[position.length - 1] - position[0];  // max - min

    while (left <= right) {

        let mid = Math.floor(left + (right - left) / 2);
        if (canWePlace(position, mid, m)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};

function canWePlace(arr, j, cows) {
    let count = 1;
    let last = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] - last) >= j) {
            count++;
            last = arr[i];
        }
    }

    return count >= cows;
}