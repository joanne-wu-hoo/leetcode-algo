// https://leetcode.com/problems/same-tree/

/*
NOT the same tree if
p.left is null but q.left exists (and vice versa)
p.right is null but q.right exists (and vice versa)

same tree if:
p.left = q.left and p.right = q.right 

*/

var isSameTree = (p,q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}


var isSameTree = function(p, q) {
    if (!p && !q) return true
    if (!p && q) return false
    if (p && !q) return false

    let stack = [[p,q]]

    while (stack.length) {
        const [left, right] = stack.pop()
        if (!left && !right) continue
        if (!left && right) return false
        if (left && !right) return false
        if (left.val !== right.val) return false
        stack.push([left.left, right.left], [left.right, right.right])
    }

    return true
};
