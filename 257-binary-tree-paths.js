// https://leetcode.com/problems/binary-tree-paths/

/* iterative */
var binaryTreePaths = function(root) {
    if (!root) return [];
    
    let paths = [];
    let stack = [[root, [root.val]]] // node, path including current node
    
    while (stack.length){
        let [cur, path] = stack.pop();
                
        if (!cur.left && !cur.right) paths.push(path.join("->"));
        
        if (cur.left) stack.push([cur.left, path.concat(cur.left.val)]);
        if (cur.right) stack.push([cur.right, path.concat(cur.right.val)]);
    }
    
    return paths;
};

/* recursive */
var binaryTreePaths = function(root, path=[root.val]) {
    let allPaths = [];
    helper(root, [root.val], allPaths);
    return allPaths;
}

var helper = (node, path, allPaths) => {
    if (!node.left && !node.right) allPaths.push(path.join("->"));
    if (node.left) helper(node.left, path.concat(node.left.val), allPaths);
    if (node.right) helper(node.right, path.concat(node.right.val), allPaths);
}
