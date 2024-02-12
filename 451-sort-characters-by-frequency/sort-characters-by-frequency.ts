function frequencySort(s: string): string {
    let freqMap = new Map();
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    const freqArray = Array.from(freqMap.entries());
    freqArray.sort((a, b) => b[1] - a[1]);

    let result = "";
    for (let [char, freq] of freqArray) {
        result += char.repeat(freq);
    }

    return result;
};