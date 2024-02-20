/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let n = nums.length - 1;
    let index = -1;

    for (let i = n; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            index = i - 1;
            break;
        }
    }

    if (index === -1) {
        reverse(nums, 0, n);
        return;
    }

    for (let i = n; i > 0; i--) {
        if (nums[i] > nums[index]) {
            swap(nums, i, index)
            break;
        }
    }

    for (let i = index + 1, j = n; i < j; i++, j--) {
        swap(nums, i, j);
    }

};

function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}