// https://leetcode.com/problems/reverse-linked-list-ii/

var reverseBetween = function(head, left, right) {
    let pointer = 1;
    let start = head;
    let current = head;
    
    // before reverse section
    while (pointer < left){
        start = current;
        current = current.next
        pointer++;
    }
    
    // at this point pointer = left, this val is going to be the "tail" of the reverse list
    let tail = current;
    let newList = null;
    
    // reverse section
    while (pointer >= left && pointer <= right){
        let next = current.next
        current.next = newList
        newList = current;
        current = next;
        pointer++;
    }
    
    // after reverse section: construct
    start.next = newList
    tail.next = current;
    
    
    if (left > 1){
        return head;
    } else {
       return newList;
    }
};
