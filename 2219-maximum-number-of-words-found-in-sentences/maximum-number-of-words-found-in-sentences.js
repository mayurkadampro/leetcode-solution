/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    return sentences.reduce((acc, item) => {
        if (acc >= item.split(" ").length) return acc;
        return item.split(" ").length
    }, 0);
};