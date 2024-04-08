/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    // Simple way -> Time Complexity: O(n)
    return letters.find((letter) => letter > target) || letters[0];

    // Binary Search -> Time Complexity: O(logN)
    let left = 0;
    let right = letters.length - 1;
    let ans = "$";
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (letters[mid] > target) {
            right = mid - 1;
            ans = letters[mid];
        } else if (letters[mid] <= target) {
            left = mid + 1;
        }
    }

    console.log(ans)

    return ans === "$" ? letters[0] : ans
};