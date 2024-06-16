/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    // # recursively 
    // if (!list1 || !list2) return (list1 ? list1 : list2);
    // if (list1.val < list2.val) {
    //     list1.next = mergeTwoLists(list1.next, list2);
    //     return list1;
    // } else {
    //     list2.next = mergeTwoLists(list1, list2.next);
    //     return list2;
    // }

    // # iteratively
    let dummyNode = { val: -1, next: null };
    let current = dummyNode;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 || list2;
    return dummyNode.next;
};