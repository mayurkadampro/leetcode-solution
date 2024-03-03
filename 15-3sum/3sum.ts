function threeSum(nums: number[]): number[][] {
    const result = [];
    if (nums.length < 3) return [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (nums[j] === nums[j - 1]) j++;
                while (nums[k] === nums[k + 1]) k--;
            }
        }
    }
    return result;
};