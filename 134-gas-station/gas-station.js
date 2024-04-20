/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let totalTank = 0;
    let start = 0;
    let total = 0;

    for (let i = 0; i < gas.length; i++) {
        const netCost = gas[i] - cost[i];
        totalTank += netCost;
        if (totalTank < 0) {
            totalTank = 0;
            start = i + 1;
        }
        total += netCost;
    }
    return total < 0 ? -1 : start;;
};