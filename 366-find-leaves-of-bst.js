// https://leetcode.com/problems/find-leaves-of-binary-tree/

var findLeaves = function(root) {
    const res = [];
    dfs(root, res);
    return res;
 };

function dfs(node, res) {
    if (node === null) return -1;

    const leftHeight = dfs(node.left, res);
    const rightHeight = dfs(node.right, res);

    const currHeight = 1 + Math.max(leftHeight, rightHeight);

    if (!res[currHeight]) {
        res[currHeight] = [node.val]
    } else {
        res[currHeight].push(node.val);
    }

    return currHeight;
}

/*
use post order traversal to determine height
*/
