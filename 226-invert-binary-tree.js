// https://leetcode.com/problems/invert-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// in - left, root, right
 var inorderTraversal = (root, data=[]) => {
    if (!root) return []

    inorderTraversal(root.left, data)
    data.push(root.val)
    inorderTraversal(root.right, data)

    return data
}

var invertTree = function(root) {
    if (!root) return null

    let invertedTreeRoot = new TreeNode(root.val)

    let stack = [[root, invertedTreeRoot]]

    while (stack.length) {
        const [cur, inverted] = stack.pop()

        if (cur.left) {
            inverted.right = new TreeNode(cur.left.val)
            stack.push([cur.left, inverted.right])
        }

        if (cur.right) {
            inverted.left = new TreeNode(cur.right.val)
            stack.push([cur.right, inverted.left])
        }
    }

    return invertedTreeRoot
};

/**
inverted.left = root.right
inverted.right = root.left
 */

 invert(t) = {
    if (t.right is null and t.left is null) return t;
 }
