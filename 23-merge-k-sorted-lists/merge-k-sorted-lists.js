
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists === null || lists.length === 0) return null;

    // TC : O(N * logK), SC : O(1)
    let interval = 1;
    while (interval < lists.length) {
        for (let i = 0; i + interval <= lists.length; i = i + interval * 2) {
            lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
        }
        interval = interval * 2;
    }
    
    return lists[0] ? lists[0] : null;

    // TC : O(N*K), SC : O(N)
    // const minPriorityQueue = new MinPriorityQueue({ priority: x => x.val });

    // for (const head of lists) {
    //     if (head) {
    //         minPriorityQueue.enqueue(head);
    //     }
    // }

    // let dummyNode = new ListNode(-1, null);
    // let current = dummyNode;

    // while (!minPriorityQueue.isEmpty()) {
    //     const { val, next } = minPriorityQueue.dequeue().element;

    //     current.next = new ListNode(val, next);
    //     current = current.next;

    //     if (next) {
    //         minPriorityQueue.enqueue(next);
    //     }

    // }

    // return dummyNode.next;
};

var mergeTwoLists = function (list1, list2) {
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