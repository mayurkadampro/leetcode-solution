/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let ammount = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            ammount += accounts[i][j];
        }
        if (ammount > maxWealth) {
            maxWealth = ammount;
        }
    }
    return maxWealth;
};