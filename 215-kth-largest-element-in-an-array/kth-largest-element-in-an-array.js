/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // nums.sort((a, b) => b - a);
    // return nums[k - 1];

    // Quick Sort Solution 
    return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(arr, start, end, k) {
    const pivotIndex = partition(arr, start, end);

    if (k < arr.length - pivotIndex) {
        return quickSelect(arr, pivotIndex + 1, end, k);
    } else if (k > arr.length - pivotIndex) {
        return quickSelect(arr, start, pivotIndex - 1, k);
    }

    return arr[pivotIndex];
};

function partition(arr, start, end) {
    /**
     * Use the last element as pivot for simplicity. Randomized pivot 
     * is a better way to avoid worst case where the the largest or the smallest 
     * element is always selected.
     */
    const pivot = arr[end];
    let i = start;
    let j = end - 1;
    // move all numbers smaller than pivot to the left and larger to the right
    while (i <= j) {
        while (arr[i] < pivot) {
            i += 1;
        }
        while (arr[j] > pivot) {
            j -= 1;
        }
        if (i <= j) {
            swap(arr, i, j);
            i += 1;
            j -= 1;
        }
    }
    // Swap pivot value to the position so that all numbers larger than pivot value 
    // is on the right, and smaller on the left.
    swap(arr, i, end);
    // return the final index where the pivot value is.
    return i;
}

// Below one give TLE
// function partition(arr, start, end) {
//     const pivot = arr[end];
//     let i = start;
//     let j = start;

//     while (i <= end) {
//         if (arr[i] < pivot) {
//             swap(arr, i, j);
//             i++;
//             j++;
//         } else {
//             i++;
//         }
//     }

//     // Swap pivot value to the position so that all numbers larger than pivot value 
//     swap(arr, i, j);
//     return j;
// }

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}