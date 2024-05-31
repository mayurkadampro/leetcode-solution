/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let map = new Map();
    let eatCount = Math.floor(candyType.length / 2);

    for (let value of candyType) {
        map.set(value, (map.get(value) || 0) + 1);
    }
    
    return map.size >= eatCount ? eatCount : map.size;
};