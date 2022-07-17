// https://leetcode.com/problems/surrounded-regions/

/*
Approach
1. Check four borders. If value is O, change it and all its neighbor to a temporary value denoting that it is an uncaptured O (ie. "S")
2. Change all O to X
3. Change all S to O
*/

const UNCAPTURED_O_VALUE = "S";

var solve = function(board) {
    if (!board.length) return;

    // change every square connected to left and right borders from O to UNCAPTURED_O_VALUE
    for (let row = 0; row < board.length; row++){
        markUncapturedOs(row, 0, board);
        markUncapturedOs(row, board[0].length-1, board);
    }
  
    // change every square connected to top and bottom borders from O to UNCAPTURED_O_VALUE
    for (let col = 0; col < board[0].length; col++){
        markUncapturedOs(0, col, board);
        markUncapturedOs(board.length-1, col, board);
    }
    
    // iterate through board again, changing UNCAPTURED_O_VALUES back to Os and Os to Xs
    for (let row = 0; row < board.length; row++){
        for (let col = 0; col < board[0].length; col++){
            if (board[row][col] === "O") board[row][col] = "X"
            if (board[row][col] === UNCAPTURED_O_VALUE) board[row][col] = "O"
        }
    }
   
    return board;
};

const directions = [
    [-1,0],
    [0,-1],
    [1,0],
    [0,1]
];

// DFS to mark uncaptured O's and turn them into UNCAPTURED_O_VALUE
const markUncapturedOs = (row, col, board) => {
    // if we're out of bounds or the value is not a O, return
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] !== "O") return;
    
    // otherwise the cell is an uncaptured O; mark it as such
    board[row][col] = UNCAPTURED_O_VALUE;
    
    for (let [rowDelta, colDelta] of directions){
        markUncapturedOs(row+rowDelta, col+colDelta, board);
    }
}
