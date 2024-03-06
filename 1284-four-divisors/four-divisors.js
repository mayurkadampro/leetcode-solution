/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += count(nums[i]);
    }
    return sum;
};

const count = (n) => {
    let divisorSum = 0, divisorCount = 0;

    // we'll use the sqrt trick to cut down on time
    for (let i = 0; i * i <= n; i++) {
        if (n % i === 0) {
            if (n / i == i) {
                return 0
            }

            // we found a divisor!
            divisorSum += i;
            divisorCount += 2;
            divisorSum += Math.floor(n / i)
            // we found too many divisors more than 4 than return 0;
            // let's break early
            if (divisorCount > 4) {
                return 0;
            }
        }
    }

    // we found exactly 4 divisors
    if (divisorCount === 4) {
        return divisorSum;
    }

    // we did not find enough divisors
    return 0;
}

