/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];
    permutations([], nums, result);
    return result;
};

function permutations(current, remaining, result) {
    if (remaining.length <= 0) result.push(current.slice());
    else {
        // Loop through remaining elements
        for (let i = 0; i < remaining.length; i++) {
            // Insert the iTH element onto the end of current
            current.push(remaining[i]);

            // Recurse with inserted element removed
            permutations(current.slice(), remaining.slice(0, i).concat(remaining.slice(i + 1)), result);

            // Remove last inserted element for next iteration
            current.pop();

        }
    }
}