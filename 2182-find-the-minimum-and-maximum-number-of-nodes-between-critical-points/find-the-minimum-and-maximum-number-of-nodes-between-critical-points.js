/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
    let current = head;
    let prev = null;
    let index = 1;
    let idx = [];

    while (current && current.next) {
        if (prev && (current.val > prev.val) && (current.val > current.next.val)) {
            idx.push(index);
        } else if (prev && (current.val < prev.val) && (current.val < current.next.val)) {
            idx.push(index);
        }
        index++;
        prev = current;
        current = current.next;
    }

    if (idx.length <= 1) return [-1, -1];

    let maxIdx = idx[0];
    let minIdx = idx[0];
    let minDistance = Infinity;
    let maxDistance = 0;

    for (let i = 0; i < idx.length; i++) {
        if (idx[i] > maxIdx) {
            maxIdx = idx[i];
        }
        if (idx[i] < minIdx) {
            minIdx = idx[i];
        }

        if (i !== 0) {
            minDistance = Math.min(minDistance, idx[i] - idx[i - 1]);
        }

    }

    maxDistance = maxIdx - minIdx;


    return [minDistance, maxDistance];
};