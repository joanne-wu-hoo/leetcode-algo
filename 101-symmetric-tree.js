// https://leetcode.com/problems/symmetric-tree/

/*
NOT symmetric if
- one of the nodes is null but the other is not
- left val != right val

symmetric if:
- left val = right val

*/

// iterative
var isSymmetric = function(root) {
    if (!root) return true;
    
    let stack = [[root.left, root.right]];
    
    while (stack.length){
        let [left, right] = stack.pop();
        if (!left && !right) continue; // IMPORTANT -- we can just be at a null point, but need to continue
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        stack.push([left.left, right.right], [left.right, right.left]);
    }
    
    return true;
};

// recursive
var isSymmetric = (root) => {
    return isMirror(root.left, root.right)
}

var isMirror = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    
    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
}
