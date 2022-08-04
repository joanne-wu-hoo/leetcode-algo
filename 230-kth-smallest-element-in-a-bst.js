// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

// in order traversal gives you an array of all values in order
// return the kth-1 element in that array (since k is 1-indexed)
var kthSmallest = function(root, k) {
    let output = [];
    dfs(root, output);
    return output[k-1];
};

// in order: left, do, right
const dfs = (node, output) => {
    if (!node) return;
    if (node.left) dfs(node.left, output);
    output.push(node.val);
    if (node.right) dfs(node.right, output);
} 
