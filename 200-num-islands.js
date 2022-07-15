// https://leetcode.com/problems/number-of-islands/

// Approach
// 1. Traverse through grid sequentially
// 2. When we encounter a 1:
//    - increase islandCount
//    - BFS throughout island
//         - update values in grid to 0 (so that when we go back to sequential search we do not double count lands connected to already accounted for island)
//         - update seen to true

const directions = [
    [-1,0], // up
    [0,1], // right
    [1,0], // down
    [0,-1] // left
]
// BFS - queue - FIFO - push, shift

var numIslands = function(grid) {
    let islandCount = 0;
    let seen = new Array(grid.length).fill(0).map(v => new Array(grid[0].length).fill(0));
    
    for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid[0].length; col++){
            if (grid[row][col] === "1"){
                islandCount++;
                
                let queue = [[row,col]]
                
                while(queue.length){
                    let [rowIdx, colIdx] = queue.shift();
                    
                    if (rowIdx < 0 || colIdx < 0 || rowIdx >= grid.length || colIdx >= grid[0].length || seen[rowIdx][colIdx] || grid[rowIdx][colIdx] === "0"){
                        continue;
                    } else {
                        grid[rowIdx][colIdx] = "0";
                        seen[rowIdx][colIdx] = true;
                    }
                    
                    for (let [rowDelta, colDelta] of directions){
                        queue.push([rowIdx+rowDelta, colIdx+colDelta])
                    }
                    
                }
            }
        }
    }
    return islandCount;
}

