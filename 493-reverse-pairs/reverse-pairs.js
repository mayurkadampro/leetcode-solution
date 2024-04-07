/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    let count = 0;

    var mergeSort = function (nums, start, end) {
        // Base case of recursion call
        if (start == end) return 0;
        let mid = Math.floor((start + end) / 2);
        mergeSort(nums, start, mid);
        mergeSort(nums, mid + 1, end);
        count += merge(nums, start, mid, end);
    }

    const merge = (nums, low, mid, high) => {
        let count = 0;
        const temp = [];
        let i = low;
        let j = mid + 1;

        while (i <= mid && j <= high) {
            if (nums[i] <= 2 * nums[j]) {
                i++;
            } else {
                count += mid - i + 1;
                j++;
            }
        }

        i = low;
        j = mid + 1;

        while (i <= mid && j <= high) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i]);
                i++;
            } else {
                temp.push(nums[j]);
                j++;
            }
        }

        while (i <= mid) {
            temp.push(nums[i]);
            i++;
        }

        while (j <= high) {
            temp.push(nums[j]);
            j++;
        }

        for (let k = 0; k < temp.length; k++) {
            nums[low + k] = temp[k];
        }

        return count;
    };


    mergeSort(nums, 0, nums.length - 1);
    return count;
};




