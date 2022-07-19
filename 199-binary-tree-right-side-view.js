// https://leetcode.com/problems/binary-tree-right-side-view/

var rightSideView = function(root) {
    if (!root) return [];
    
    const output = [];
    const queue = [root];
    let numNodesInLevel = 1;
    
    while (queue.length){
        let currentLevelValues = [];
        while (numNodesInLevel){
            numNodesInLevel--;
            cur = queue.shift();
            currentLevelValues.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        
        numNodesInLevel = queue.length;
        output.push(currentLevelValues[currentLevelValues.length-1])
    }
    
    return output;
};

// bfs (queue, FIFO, push/shift) to collect each level's nodes
// only push the last value into output
