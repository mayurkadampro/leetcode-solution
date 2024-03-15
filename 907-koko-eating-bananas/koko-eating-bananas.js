/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 1;
    let right = findMax(piles);

    while (left < right) {
        const k = Math.floor(left + (right - left) / 2);
        const hourSpent = maxEatingHours(piles, k);
        if (hourSpent > h) {
            left = k + 1;
        }
        if (hourSpent <= h) {
            right = k;
        }
    }
    return left;
};

var maxEatingHours = (piles, k) => {
    let maxEatingHours = 0;
    for (let pile of piles) {
        maxEatingHours += Math.ceil(pile / k);
    }
    return maxEatingHours;
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