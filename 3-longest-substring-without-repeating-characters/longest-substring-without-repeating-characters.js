/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length < 2) { return s.length; }
    let left = 0;
    let right = 0;
    let maxSize = 0;
    let set = new Set();

    while (right < s.length) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[right]);
        maxSize = Math.max(maxSize, right - left + 1);
        right++;
    }
    return maxSize;
};