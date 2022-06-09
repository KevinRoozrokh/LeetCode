function removeNthFromEnd(head, n) {
    let nthHead = { next: head };
    let slow = nthHead;
    let fast = nthHead;

    // Move fast n nodes from the head
    for (let i = 1; i <= n; i++) {
        fast = fast.next;
    }

    // Move fast and slow pointers until fast hits the end
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return nthHead.next;
}



module.exports = removeNthFromEnd;
