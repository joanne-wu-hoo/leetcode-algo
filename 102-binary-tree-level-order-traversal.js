// https://leetcode.com/problems/binary-tree-level-order-traversal/

// BFS - queue - FIFO - push/shift
const levelOrder = (root) => {
    if (!root) return [];
    
    let output = [];
    let queue = [root];
    let numNodesInLevel = 1;
    
    while (queue.length){
        let levelValues = [];
        while (numNodesInLevel){
            let cur = queue.shift();
            levelValues.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
            numNodesInLevel--;
        }    
        
        output.push(levelValues);
        numNodesInLevel = queue.length;
    }
    
    return output;
}
