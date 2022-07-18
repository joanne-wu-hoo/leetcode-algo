// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

var lowestCommonAncestor = function(node, p, q) {
    if (!node) return null;
    if (node === p || node === q) return node;
    
    const left = lowestCommonAncestor(node.left, p, q)
    const right = lowestCommonAncestor(node.right, p, q)
    
    if (!left) return right  // p and q are in the right subtree
    if (!right) return left  // p and q are in the left subtree
    return node              // p is in one side and q is in the other
};
