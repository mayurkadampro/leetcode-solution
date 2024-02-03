/**
 * @param {number[]} container
 * @return {number}
 */
var maxArea = function (container) {
    let left = 0;            // Left pointer starting from the leftmost edge
    let right = container.length - 1; // Right pointer starting from the rightmost edge
    let maxWater = 0;        // Initialize the maximum water capacity

    while (left < right) {
        // Calculate the width of the container
        let width = right - left;

        // Calculate the height of the container (the minimum height between the two lines)
        let height = Math.min(container[left], container[right]);

        // Calculate the water capacity of the current container
        let water = width * height;

        // Update the maximum water capacity if the current container holds more water
        maxWater = Math.max(maxWater, water);

        // Move the pointers towards each other
        if (container[left] < container[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};