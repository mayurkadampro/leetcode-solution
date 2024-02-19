/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {

    // 1st solution
    // let res = [];
    // for (let i = 1; i <= n; i++) {
    //     let string = ''
    //     if (i % 3 === 0) string += 'Fizz'
    //     if (i % 5 === 0) string += 'Buzz'
    //     if (string === '') string += i
    //     res.push(string)
    // }
    // return res;


    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i + "");
    }
    return result;
};