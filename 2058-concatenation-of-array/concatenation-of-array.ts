function getConcatenation(nums: number[]): number[] {
    // return nums.concat(nums)
    // return [...nums, ...nums]
    const result = [];
    for(let i= 0;  i< nums.length; i++) {
        result[i] = nums[i];
        result [i + nums.length] = nums[i]
    }
    return result;
};