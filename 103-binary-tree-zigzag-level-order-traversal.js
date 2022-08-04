// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

/*
BFS - queue - FIFO - push/shift
keep track of levels with `numNodesInLevel`
for each level, alternate whether we push left first or right first with `shouldAddLeftToRight` = true/false

*/

var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    let output = [];
    let queue = [root];
    let numNodesInLevel = 1;
    let shouldAddLeftToRight = false;
    
    while (queue.length){
        let levelValues = [];
        shouldAddLeftToRight = !shouldAddLeftToRight;
        
        while (numNodesInLevel){
            let cur = queue.shift();
            
            if (shouldAddLeftToRight) {
                levelValues.push(cur.val);
            } else {
                levelValues.unshift(cur.val);
            }
            
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
           
            numNodesInLevel--;
        }

        numNodesInLevel = queue.length;
        output.push(levelValues);
    
    }
    
    return output;
};
