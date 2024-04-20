/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let st = [], lastOccurence = [], seen = [];

    for (let i = 0; i < s.length; i++) {
        lastOccurence[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
        if (seen[s[i]]) continue;
        while (st.length > 0 && s[i] < st[st.length - 1] && lastOccurence[st[st.length - 1]] > i) {
            let ch = st.pop();
            seen[ch] = false;
        }

        st.push(s[i]);
        seen[s[i]] = true;
    }

    return st.join("");
};