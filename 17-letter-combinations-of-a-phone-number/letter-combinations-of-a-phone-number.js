/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    const phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const result = [];
    generateCombinations("", digits, phone_map, result);
    return result;
};

var generateCombinations = (combination, next_digits, phone_map, result) => {
    if (next_digits.length === 0) {
        result.push(combination);
        return;
    }
    const letters = phone_map[next_digits[0] - '2'];
    for (const letter of letters) {
        generateCombinations(combination + letter, next_digits.slice(1), phone_map, result);
    }
}