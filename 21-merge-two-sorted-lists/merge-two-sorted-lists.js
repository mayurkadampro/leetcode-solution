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
    if (!list1) return list2;
    if (!list2) return list1;
    let dummyNode = new ListNode(-1, null);
    let current = dummyNode;

    while (list1 && list2) {
        let list1Val = list1 ? list1.val : null;
        let list2Val = list2 ? list2.val : null;
        
        if (list1Val < list2Val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    if (list1) {
        current.next = list1;
    }

    if (list2) {
        current.next = list2;
    }

    return dummyNode.next;

};