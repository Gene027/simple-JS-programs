
/*
//for testing solution algorithm
var puzzle = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,3,0,8,5],
    [0,0,1,0,2,0,0,0,0],
    [0,0,0,5,0,7,0,0,0],
    [0,0,4,0,0,0,1,0,0],
    [0,9,0,0,0,0,0,0,0],
    [5,0,0,0,0,0,0,7,3],
    [0,0,2,0,1,0,0,0,0],
    [0,0,0,0,4,0,0,0,9]
];
if (solve(puzzle, 0, 0)) {
    console.log("Solve was successful");
    console.log(puzzle);
}
else {
    console.log("no solution exists");
}
*/
function isSafe(board, row, col, num) {

    for (let c = 0; c < 9; c++) {
        if (board[row][c] == num) {
          return false;
        }
    }

    for (let r = 0; r < 9; r++) {
      if (board[r][col] == num) {
        return false;
      }
    }

    let startRow = row - row % 3;  //delimits any row number to a row in its grid 3 by 3
    let startCol = col -col % 3;

    for(let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (board[r + startRow][c + startCol] == num) {
                return false;
            }
        }
    }
    return true;
}

export function solve(board, row, col) {
    //stops backtracking on reaching the end of board
    if (row == 9 - 1 && col == 9){
        return true
    }
    // moves to next row after exhausting all columns in the row
    if (col == 9){
        row++;
        col = 0;
    }
    //skips iteration for non empty cells and try solve algorithm for next column
    if (board[row][col] != 0) {
        return solve(board, row, col + 1);
    }

    for (let num = 1; num <= 9; num++) {
        if (isSafe(board,row,col,num)){
            board[row][col] = num;
            if (solve(board,row, col + 1)) {
                return true;
            }
        }
        board[row][col] = 0;
    }
    return false;
}