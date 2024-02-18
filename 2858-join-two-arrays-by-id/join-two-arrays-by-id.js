/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let map = {};
    arr1.forEach(obj => map[obj.id] = obj);
    arr2.forEach((obj) => {
        if (map[obj.id]) {
            map[obj.id] = { ...map[obj.id], ...obj };
        } else {
            map[obj.id] = obj;
        }
    });
    return Object.values(map);
};