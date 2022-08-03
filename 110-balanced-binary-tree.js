// https://leetcode.com/problems/balanced-binary-tree/

// 1. Iterative
// DFS down tree, for each left and right node, determine the difference in height
// if the difference is > 1, return false
// otherwise keep on traversing

var isBalanced = function(root) {
    if (!root) return true;
    
    let stack = [root];
    
    while (stack.length){
        let cur = stack.pop();
        let leftHeight = getHeight(cur.left);
        let rightHeight = getHeight(cur.right);
                
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        } else {
            if (cur.left) stack.push(cur.left);
            if (cur.right) stack.push(cur.right);
        }
    }
    
    return true;
};

// 2. Recursive

function isBalanced(node) {
    if (!node) return true;
    
    // balanced if height right and left do not differ by more than 1
   return isBalanced(node.right) && isBalanced(node.left) && Math.abs(getHeight(node.right) - getHeight(node.left)) < 2
};

function getHeight(node){
    if (!node) return 0;
    
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}
