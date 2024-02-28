/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
    let totalMatch = 0;
    let teams = n;

    while (Math.floor(teams / 2) > 0) {
        if (teams % 2 === 0) {
            totalMatch += teams / 2;
            teams = teams / 2;
        } else {
            totalMatch += (teams - 1) / 2;
            teams = (teams - 1) / 2 + 1;
        }
    }
    return totalMatch;
};