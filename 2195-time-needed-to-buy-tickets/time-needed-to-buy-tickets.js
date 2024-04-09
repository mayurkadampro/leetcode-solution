/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let count = 0;
    let index = 0;
    while (tickets[k] !== 0) {
        if (tickets[index] !== 0) {
            tickets[index] -= 1;
            count += 1;
        }
        index = index === tickets.length - 1 ? 0 : index + 1;
    }

    return count;
};