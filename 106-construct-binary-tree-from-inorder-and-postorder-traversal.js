// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

/*

post - left, right, root
in - left, root, right

*/

var buildTree = function(inorder, postorder) {
    if (!inorder || inorder.length < 1) return null;
    
    let root = new TreeNode(postorder.pop());
    let rootIndex = inorder.indexOf(root.val);
    
    let left = inorder.slice(0, rootIndex);
    let right = inorder.slice(rootIndex+1);
    
    root.right = buildTree(right, postorder);
    root.left = buildTree(left, postorder);

    return root;
};

/* why do we need to construct root.right before root.left?

When calling postorder.pop() in the DFS function, we're relying on the fact that the postorder traversal of the tree is of the form [...leftChildren, ...rightChildren, root]
So we need to recursively finish our entire right tree by popping from postorder before we can start on the left tree
In a tree that has right children, if we DFS down the lefthand side first, we are adding what actually should be right children to the lefthand side of the tree. When we get back to our original root, we then start going down the righthand path, but there's nothing left to pop from postorder, we get undefined as our val and idx, and we enter an infinite loop.

*/
