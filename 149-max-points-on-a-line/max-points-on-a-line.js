/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    let result = 0;

    for (let i = 0; i < points.length; i++) {

        const map = new Map();
        const [x1, y1] = points[i];
        let slope = 0;

        for (let j = i + 1; j < points.length; j++) {
            if (i === j) continue;
            const [x2, y2] = points[j];

            if (x1 === x2) slope = Number.MAX_SAFE_INTEGER;
            else slope = (y2 - y1) / (x2 - x1);

            map.set(slope, (map.get(slope) || 0) + 1);
            result = Math.max(result, map.get(slope))
        }
    }

    return result + 1;
};