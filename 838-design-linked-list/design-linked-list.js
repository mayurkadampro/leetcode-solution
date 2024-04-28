var Node = function (val, next) {
    this.val = val == undefined ? 0 : val;
    this.next = next == undefined ? null : next;
}

var MyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index >= this.length || index < 0) return -1;
    let idx = 0;
    let currentNode = this.head;
    while (idx !== index) {
        currentNode = currentNode.next;
        idx++;
    }
    return currentNode.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new Node(val);
    if (!this.tail) {
        this.head = newNode;
    } else {
        this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.length) return;
    if (index === this.length) { this.addAtTail(val); return; }
    if (index === 0) { this.addAtHead(val); return; }

    let idx = 0;
    let currentNode = this.head;
    while (currentNode) {
        if (idx === index - 1) {
            let node = new Node(val);
            node.next = currentNode.next;
            currentNode.next = node;
            this.length++;
            return;
        }
        currentNode = currentNode.next;
        idx++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.length || index < 0) return;
    if (index === 0) {
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return;
    }
    let idx = 0;
    let current = this.head;
    while (current) {
        if (idx === index - 1) {
            current.next = current.next.next ? current.next.next : null;
            if (!current.next) {
                this.tail = current;
            }
            this.length--;
            return;
        }
        current = current.next;
        idx++
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */