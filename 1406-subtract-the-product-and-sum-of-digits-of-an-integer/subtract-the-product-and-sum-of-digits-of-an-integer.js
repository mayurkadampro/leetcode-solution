/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let productOfN = 1;
    let sumOfN = 0;

    while (n > 0) {
        let lastDigit = n % 10;
        productOfN = productOfN * lastDigit;
        sumOfN = sumOfN + lastDigit;
        n = Math.floor(n / 10)
    }
    return productOfN - sumOfN;
};