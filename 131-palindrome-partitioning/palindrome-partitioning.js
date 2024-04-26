/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [];
    helper(s, 0, [], result);
    return result;
};

const helper = (str, start, current, result) => {
    if (start === str.length) {
        result.push([...current])
        return;
    }

    for (let i = start + 1; i <= str.length; i++) {
        const target = str.substring(start, i);
        if (isPalindrome(target)) {
            current.push(target);
            helper(str, i, current, result);
            current.pop();
        }
    }
}

const isPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}