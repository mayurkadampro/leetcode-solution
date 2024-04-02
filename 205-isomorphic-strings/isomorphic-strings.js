/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let sMap = new Map();
    let tMap = new Map();

    for (let i = 0; i < s.length; i++) {

        // Compare the maps, if not equal, return false...
        if (sMap.get(s[i]) !== tMap.get(t[i]))
            return false;

        // Insert each character if string s and t into seperate map...
        sMap.set(s[i], i + 1);
        tMap.set(t[i], i + 1);
    }
    return true;
};