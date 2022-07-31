// https://leetcode.com/problems/average-of-levels-in-binary-tree/

var averageOfLevels = function(root) {
    if (!root) return null;
    
    let levelAvgs = [];
    let numNodesInLevel = 1;
    let queue = [root];
    
    while (queue.length){
        let sum = 0;
        let divisor = numNodesInLevel;
        
        while (numNodesInLevel){
            let cur = queue.shift();
            sum += cur.val;
            
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
            numNodesInLevel--;
        }
        
        levelAvgs.push(sum/divisor);
        numNodesInLevel = queue.length;
    }
    
    return levelAvgs;
};
