/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    // Bit Manipulation
    let carry;
    while ((a & b) !== 0) {
        carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a ^ b;

    // Math
    if (a < 0 && b == 0)
        return a;
    if (b < 0 && a == 0)
        return b;
        
};