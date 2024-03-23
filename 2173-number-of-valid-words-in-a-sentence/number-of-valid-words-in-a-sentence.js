/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
    let list = sentence.split(' ');
    let filtered = list.filter((word) => {
        if (/\d/.test(word) || word === '') return false; // removes anything with numbers or is blank
        if (/^[!,.]$/.test(word)) return true; // punctuation only
        if (/^\w+[!,.]?$/.test(word)) return true; // word + optional punctuation
        if (/^\w+[-]?\w+[!,.]?$/.test(word)) return true //word + optional hypen + word + optional punctuation
        return false
    })
    return filtered.length;
};