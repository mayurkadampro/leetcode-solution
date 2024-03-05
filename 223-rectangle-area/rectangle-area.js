/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const aArea = calculateArea(ax1, ay1, ax2, ay2);
    const bArea = calculateArea(bx1, by1, bx2, by2);

    const overlapY = Math.max(Math.min(ay2, by2) - Math.max(ay1, by1), 0);
    const overlapX = Math.max(Math.min(ax2, bx2) - Math.max(ax1, bx1), 0);

    const overlapArea = overlapX * overlapY;
    return aArea + bArea - overlapArea;
};

function calculateArea(x1, y1, x2, y2) {
    const width = Math.abs(x1 - x2);
    const height = Math.abs(y1 - y2);
    return width * height;
}