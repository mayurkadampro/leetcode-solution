/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    // Initialize an array to store the merged interval
    let result = [];

    // Sort intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Initialize an array and by dafult store first value
    let mergedInterval = intervals[0];

    // Iterate through each interval in the sorted array
    for (let i = 1; i < intervals.length; i++) {

        // get ith position interval
        let interval = intervals[i];

        // check if interval overlap
        if (interval[0] <= mergedInterval[1]) {
            // endTime need to update with max of both interval end time
            mergedInterval[1] = Math.max(mergedInterval[1], interval[1]);
        } else {
            // push previously calculated interval;
            result.push(mergedInterval);

            // set current interval for further operations.
            mergedInterval = interval;
        }
    }

    // push the last interval 
    result.push(mergedInterval);

    // Return the array of merged intervals
    return result;
};