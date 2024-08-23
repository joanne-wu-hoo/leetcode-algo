// https://leetcode.com/problems/merge-two-sorted-lists/description/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
   // if one of the lists is empty, return the other list
    if (!list1) return list2;
    if (!list2) return list1;
    
    // otherwise go through each list, comparing the top values
    // add the lower of the values to the merged list and increment that list's pointer
    
    let mergedList = new ListNode(0);
    let cur = mergedList;
    let p1 = list1;
    let p2 = list2;
    
    while (p1 && p2){
        if (p1.val <= p2.val){
            cur.next = p1;
            p1 = p1.next;
        } else {
            cur.next = p2;
            p2 = p2.next
        }
        
        cur = cur.next;
    }

    // when we've depleted at least one of the lists
    // check if either list still has numbers
    // if so, add that list to merged list

    if (!p1){
        cur.next = p2;
    }

    if (!p2){
        cur.next = p1;
    }
    
    return mergedList.next;
};

