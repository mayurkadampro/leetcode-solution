/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let maxVal = 0;
    let result = [];

    for (let value of arr1) {
        if (value > maxVal) {
            maxVal = value;
        }
    };

    let freqArr = new Array(maxVal + 1).fill(0);
    for (let value of arr1) {
        freqArr[value]++;
    }

    for (let value of arr2) {
        while (freqArr[value] > 0) {
            result.push(value);
            freqArr[value]--;
        }
    }

    for (let i = 0; i < freqArr.length; i++) {
        if (freqArr[i] !== 0) {
            while (freqArr[i] > 0) {
                result.push(i);
                freqArr[i]--;
            }

        }
    }

    return result;
};