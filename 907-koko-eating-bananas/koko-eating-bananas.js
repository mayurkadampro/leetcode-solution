/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 0;
    let right = findMax(piles);

    while (left < right) {
        let k = Math.floor(left + (right - left) / 2);
        let maxEatCount = maxEat(piles, k);
        if (maxEatCount > h) {
            left = k + 1;
        } else {
            right = k;
        }
    }
    return right;
};

var maxEat = (piles, k) => {
    let maxEat = 0;
    for (let pile of piles) {
        maxEat += Math.ceil(pile / k);
    }
    return maxEat;
}

var findMax = (piles) => {
    let max = piles[0];
    for (let i = 1; i < piles.length; i++) {
        if (piles[i] > max) {
            max = piles[i]
        }
    }
    return max;
}