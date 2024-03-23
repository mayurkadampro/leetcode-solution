/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
    // 1 st solution
    // let list = sentence.split(' ');
    // let filtered = list.filter((word) => {
    //     if (/\d/.test(word) || word === '') return false; // removes anything with numbers or is blank
    //     if (/^[!,.]$/.test(word)) return true; // punctuation only
    //     if (/^\w+[!,.]?$/.test(word)) return true; // word + optional punctuation
    //     if (/^\w+[-]?\w+[!,.]?$/.test(word)) return true //word + optional hypen + word + optional punctuation
    //     return false
    // })
    // return filtered.length;

    let validPattern = /^([a-z]+(-?[a-z]+)?)?(!|\.|,)?$/;
    sentence = sentence.trim().split(/\s+/);
    return sentence.reduce((acc, word) => {
        if (validPattern.test(word)) {
            return acc + 1;
        }
        return acc;
    }, 0);
};