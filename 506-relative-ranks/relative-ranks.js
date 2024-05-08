/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let answer = [...score];
    answer.sort((a, b) => b - a);
    let map = new Map();
    for (let i = 0; i < score.length; i++) {
        map.set(score[i], i);
    }
    for (let i = 0; i < answer.length; i++) {
        if (i === 0) {
            score[map.get(answer[i])] = "Gold Medal";
        } else if (i === 1) {
            score[map.get(answer[i])] = "Silver Medal";
        } else if (i === 2) {
            score[map.get(answer[i])] = "Bronze Medal";
        } else {
            score[map.get(answer[i])] = "" + (i + 1);
        }
    }
    return score;
};