/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // // loop from right moving left
    // // add 1 and determin if you need to carry
    // let [carry, idx, nums] = [1, digits.length - 1, [...digits]];

    // while (carry) {
    //     const val = nums[idx] + carry;
    //     if (val === 10) {
    //         nums[idx] = 0;
    //         if (idx === 0) {
    //             nums.unshift(carry)
    //             carry = 0;
    //         }
    //     } else {
    //         nums[idx] = val;
    //         carry = 0;
    //     }
    //     idx--;
    // }
    // return nums;
    return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
};