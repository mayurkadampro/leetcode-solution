/**
 * @param {string} digits
 * @return {string[]}
 */

// Backtracking
// var letterCombinations = function (digits) {
//     if (digits.length === 0) return [];
//     const phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
//     const result = [];
//     generateCombinations("", digits, phone_map, result);
//     return result;
// };


// var generateCombinations = (combination, next_digits, phone_map, result) => {
//     if (next_digits.length === 0) {
//         result.push(combination);
//         return;
//     }
//     const letters = phone_map[next_digits[0] - '2'];
//     for (const letter of letters) {
//         generateCombinations(combination + letter, next_digits.slice(1), phone_map, result);
//     }
// }

// Iterative
var letterCombinations = function (digits) {
    if (!digits) {
        return [];
    }

    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    let combinations = [''];

    for (const digit of digits) {
        const newCombinations = [];
        for (const combination of combinations) {
            for (const letter of phoneMap[digit]) {
                newCombinations.push(combination + letter);
            }
        }
        combinations = newCombinations;
    }

    return combinations;
}