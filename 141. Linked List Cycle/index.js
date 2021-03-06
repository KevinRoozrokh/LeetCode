function hasCycle(head) {
    if (!head) return false;
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;


}

module.exports = hasCycle;
