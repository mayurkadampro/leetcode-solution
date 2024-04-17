/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (!s || !t) {
        return "";
    }

    let map = new Map();
    for (let c of t) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    let uniqueness = map.size;
    let start = 0;
    let end = 0;
    let substring = '';



    while (end <= s.length) {
        const rightChar = s[end];
        if (map.has(rightChar)) {
            map.set(rightChar, map.get(rightChar) - 1);
            if (map.get(rightChar) === 0) {
                uniqueness--;
            }
        }

        // Shrinking Phase
        while (uniqueness === 0) {
            // Find length
            if (!substring || substring.length > end - start + 1) {
                substring = s.slice(start, end + 1);
            }

            const leftChar = s[start];
            // If the leftChar in charMap is at exactly 0 before being 
            // incremented, we now need more leftChars so that its count
            // in charMap goes down to exactly 0
            if (map.has(leftChar)) {
                map.set(leftChar, map.get(leftChar) + 1);
                if (map.get(leftChar) > 0) {
                    uniqueness++;
                }
            }
            start++;
        }
        end++;

    }

    return substring;
};