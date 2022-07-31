// https://leetcode.com/problems/merge-two-binary-trees


/* Recursive (preorder: do, left, right)
for every call
- check if current node exists for both trees - if so, sum values and update value in current node of first tree
- call function with left children + right children
- if at any step, any of thechildren are null, return the child of the other tree to be added as subtree

*/
var mergeTrees = function(root1, root2) {
    // if any of the nodes are null, return the other node
    if (!root1) return root2;
    if (!root2) return root1;
    
    // if both nodes exist, then sum and update node 1 value;
    root1.val += root2.val;
    
    // call function with left and right
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    return root1;
}

/* DFS iterative w/ stack - LIFO - push/pop
push the root nodes of both the trees onto the stack
then, at every step, we remove a node pair from the top of the stack

for every node pair removed, we add the values corresponding to the two nodes and update the value of the corresponding node in the first tree 

then, if the left child of the first tree exists, we push the left child(pair) of both the trees onto the stack
if the left child of the first tree doesn't exist, we append the left child(subtree) of the second tree to the current node of the first tree
^ repeat for the right child pair as well 

*/
var mergeTrees = function(root1, root2) {
    if (root1 && !root2) return root1;
    if (root2 && !root1) return root2;
    
    let stack = [{tree1Node: root1, tree2Node: root2}];
    
    while (stack.length){
        let { tree1Node, tree2Node } = stack.pop();
        
        if (!tree1Node || !tree2Node) continue;
        tree1Node.val += tree2Node.val;
        
        if (!tree1Node.left) {
            tree1Node.left = tree2Node.left;
        } else {
            stack.push({tree1Node: tree1Node.left, tree2Node: tree2Node.left});
        }
        
        if (!tree1Node.right){
            tree1Node.right = tree2Node.right;
        } else {
            stack.push({tree1Node: tree1Node.right, tree2Node: tree2Node.right});
        }
    }
    
    return root1;
}
