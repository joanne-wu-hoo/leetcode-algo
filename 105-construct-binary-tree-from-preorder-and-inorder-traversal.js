// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/*

pre - root, left, right
in - left, root, right

*/

function buildTree(preorder, inorder) {
    if (!inorder || inorder.length < 1) return null;

    let root = new TreeNode(preorder.shift())
    let index = inorder.indexOf(root.val)

    // left subtree is everything to the left of root in inorder
    let leftside = inorder.slice(0, index)
    // right subtree is everything to the right of root in inorder
    let rightside = inorder.slice(index + 1)

    // recursively build left and right sides of tree
    root.left = buildTree(preorder, leftside)
    root.right = buildTree(preorder, rightside)

    return root
}
