/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // O((m+n)log(m+n))
    // for (let i = m, count = 0; count < n; i++, count++) {
    //     nums1[i] = nums2[count];
    // }
    // nums1 = nums1.sort((a, b) => a - b);
    // return nums1;

    // Two Pointer - O(m+n)
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j];
            k--;
            j--;
        } else {
            nums1[k] = nums1[i];
            k--;
            i--;
        }
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
};