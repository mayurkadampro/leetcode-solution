/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

    // 1st solution
    // let left = 0;
    // let right = s.length - 1;
    // let set = new Set();
    // set.add('a');
    // set.add('e');
    // set.add('i');
    // set.add('o');
    // set.add('u');
    // set.add('A');
    // set.add('E');
    // set.add('I');
    // set.add('O');
    // set.add('U');

    // const arr = s.split("");
    // while (left <= right) {
    //     let leftStr = arr[left];
    //     let rightStr = arr[right];
    //     if (!set.has(leftStr)) {
    //         left++;
    //     } else if (!set.has(rightStr)) {
    //         right--;
    //     } else if (set.has(leftStr) && set.has(rightStr)) {
    //         let temp = arr[left];
    //         arr[left] = arr[right];
    //         arr[right] = temp;
    //         left++;
    //         right--;
    //     }
    // }
    // return arr.join("");

    // 2nd REGEX solution
    const vow = s.match(/[aeiou]/gi);
    return s.replace(/[aeiou]/gi, el => vow.pop());
};