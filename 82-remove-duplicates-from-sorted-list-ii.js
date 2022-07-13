// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

/* plan:
go thru and make a frequency counter
go thru again, if the value has a count of 1, then append it, otherwise skip it

use sentinel node
sentinel = new ListNode(0)
sentinel.next = head;

prev = sentinel;
cur = head;

...

return sentinel.next;

*/

var deleteDuplicates = function(head) {
    let fc = getFc(head);
    
    let sentinel = new ListNode(0);
    sentinel.next = head;
    
    let prev = sentinel;
    let cur = head;
        
    while (cur){
        if (fc[cur.val] === 1){
            prev.next = cur;
            prev = cur;
        } else {
            prev.next = null;
        }
    
        cur = cur.next;
    }
    
    return sentinel.next;
}

const getFc = (head) => {
    let fc = {};
    
    let cur = head;
    
    while (cur){
        fc[cur.val] = (fc[cur.val] || 0) + 1;
        cur = cur.next;
    }
    
    return fc;
}
