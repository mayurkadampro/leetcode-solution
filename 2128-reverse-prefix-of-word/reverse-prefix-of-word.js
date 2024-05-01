/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let chIndex = word.indexOf(ch);
    if (chIndex < 0) return word
    let firstWord = word.slice(0, chIndex + 1);
    let secondWord = word.slice(chIndex + 1, word.length);
    return reverseStr(firstWord) + secondWord;
};

const reverseStr = (str) => {
    let strRev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strRev += str[i];
    }
    return strRev;
}