/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    // 1st solution
    // let chIndex = word.indexOf(ch);
    // if (chIndex < 0) return word
    // let firstWord = word.slice(0, chIndex + 1);
    // let secondWord = word.slice(chIndex + 1, word.length);
    // return reverseStr(firstWord) + secondWord;

    // 2nd solution by swapping
    let left = 0;
    let right = word.indexOf(ch);
    if (right < 0 || word === ch) return word;
    const arr = word.split('');
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr.join('');
};

const reverseStr = (str) => {
    let strRev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strRev += str[i];
    }
    return strRev;
}