/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
    const [aX1, aY1, aX2, aY2] = rec1;
    const [bX1, bY1, bX2, bY2] = rec2;

    let left = Math.max(aX1, bX1);
    let bottom = Math.max(aY1, bY1);

    let right = Math.min(aX2, bX2);
    let top = Math.min(aY2, bY2);

    if (right > left && top > bottom) {
        return true;
    }
    return false;
};