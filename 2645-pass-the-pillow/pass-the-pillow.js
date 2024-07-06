/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    let pillowPos = 1;
    let reverseDir = false;
    let currentTime = 0;

    while (currentTime < time) {
        if (reverseDir) {
            pillowPos--;
        } else {
            pillowPos++;
        }

        if (pillowPos === 1 || pillowPos === n) {
            reverseDir = !reverseDir;
        }

        currentTime++;
    }
    return pillowPos;
};