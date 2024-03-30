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
    if (remaining.length === current.length) {
        result.push(current.slice());
        return
    }

    // Loop through remaining elements
    for (let i = 0; i < remaining.length; i++) {

        if (!current.includes(remaining[i])) {
            // Insert the iTH element onto the end of current
            current.push(remaining[i]);

            // Recurse with inserted element removed
            permutations(current, remaining, result);

            // Remove last inserted element for next iteration
            current.pop();
        }
    }
}


// Alternate Solution
