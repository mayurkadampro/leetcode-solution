/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
    let prepareTime = 0;
    let n = customers.length;
    let deliverTime = 0;
    for (const customer of customers) {
        let [arrival, time] = customer;
        let processTime = 0;
        if (prepareTime > arrival) {
            processTime = prepareTime + time;
        } else {
            processTime = arrival + time;
        }
        prepareTime = processTime;
        deliverTime += prepareTime - arrival;

    }
    return deliverTime / n;
};