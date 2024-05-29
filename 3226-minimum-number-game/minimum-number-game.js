/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let queue = new MinPriorityQueue();
    let result = [];

    for (let value of nums) {
        queue.enqueue(value);
    };

    while (queue.size() > 1) {
        let first = queue.dequeue().element;
        let second = queue.dequeue().element;
        result.push(second);
        result.push(first);
    }

    return result;
};