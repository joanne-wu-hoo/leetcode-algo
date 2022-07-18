// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// DFS - stack (iterative) - LIFO - push/pop
// when node = null, we have reached the end of a path, recalc maxDepth

var maxDepth = (root) => {
    if (!root) return 0;
    
    let maxDepth = 0;
    let toVisit = [[root, 1]]; // node, depth including node
    
    while (toVisit.length){
        let [node, depth] = toVisit.pop();
        if (!node.left && !node.right) maxDepth = Math.max(maxDepth, depth);
        
        if (node.left) toVisit.push([node.left, depth+1]);
        if (node.right) toVisit.push([node.right, depth+1]);
    }
    
    return maxDepth;
}

// DFS - recursive
var maxDepth = (node) => {
    if (!node) return 0;
    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}
