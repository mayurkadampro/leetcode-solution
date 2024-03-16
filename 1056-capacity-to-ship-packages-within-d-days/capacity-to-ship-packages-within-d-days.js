/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let [left, right] = findCapacity(weights);

    while (left <= right) {
        let capacity = Math.floor(left + (right - left) / 2);
        let numberOfDays = checkCapacity(weights, capacity);
        if (numberOfDays > days) {
            left = capacity + 1;
        } else if (numberOfDays <= days) {
            right = capacity - 1;
        }
    }
    return left;
};

var findCapacity = function (weights) {
    let max = weights[0];
    let sum = 0;

    for (let weight of weights) {
        sum += weight;
        if (weight > max) {
            max = weight;
        }
    }
    return [max, sum];
}

var checkCapacity = function (weights, capacity) {
    let numberOfDays = 1;
    let currentShipWeight = 0;
    for (weight of weights) {
        currentShipWeight += weight;
        if (currentShipWeight > capacity) {
            currentShipWeight = weight
            numberOfDays += 1
        }
    }
    return numberOfDays;
}