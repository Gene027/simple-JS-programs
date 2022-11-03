
const N = 9;
const Empty = 0;
var grid = [
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

solveGame(grid, 0, 0);
console.log(grid);
/*if(solveGame(grid) == true) {
    //document.getElementById("announce").innerHTML = "Congratulations You Won!";
    showSolution(grid);
}
else {
    //document.getElementById("announce").innerHTML = "Not a solution!, ensure you did not repeat a number on the same row, column, or grid";
    console.log("Oops, I cant solve this");
}
*/
// solves the game

function solveGame (grid, row, column) {
    if (row > 8) {
        return true;
    }
    else if (grid[row][column] != 0){
        let tempRow, tempColumn;
        nextEmpty(grid, row, column, tempRow, tempColumn);
        return solveGame(grid, tempRow, tempColumn);
    }
    else {
        let possibilities = possibleNum(grid, row, column);
        if (possibilities.length == 0) {
            return false;
        }
        else {
            let assertion = false;
            for (i = 0; i < possibilities.length; i++){
                let num = possibilities[i];
                let tempGrid = grid;
                tempGrid[row][column] = num;
                let tempRow, tempColumn;
                nextEmpty(tempGrid, row, column, tempRow, tempColumn);
                if (solveGame(tempGrid, tempRow, tempColumn)) {
                    grid = tempGrid;
                    assertion = true;
                    break;
                }
            }

            return assertion;
        }
    }
}

function isCellsafe(grid, prow, pcolumn, num) {
    if (grid[prow][pcolumn] != 0) {
        return false;
    }
    else {
        let assertion = true;       //assert if you can place the number in a cell
        let gridBeginColumn = (pcolumn / 3) * 3;
        let gridBeginRow =     (prow / 3) * 3;
        for (let i = 0; i < N; i++) {       //iterates over elements in the grid[0..8][0..8]
            if (grid[prow][i] == num) {
                assertion = false;
                break;
            }
            if (grid[i][pcolumn] == num) {
                assertion = false;
                break;
            }
            if (grid[gridBeginRow + i / 3][gridBeginColumn + i % 3] == num) {
                assertion = false;
                break;
            }
        }
        return assertion;
    }
}

function possibleNum(grid, row, column) {
    let possibilities = [];
    for (let i = 1; i <= N; i++) {
        if (isCellsafe(grid, row, column, i)) {
            possibilities.push(i);
        }
    }
    return possibilities;
}
      
function showSolution(grid) {
    for (let row = 0; row < N; row++) {
        for (let column = 0; column < N; column++) {
            console.log(grid[row][column]);
        }
    }
}

function nextEmpty(grid, row, column, nrow, ncolumn) {
    index = N * N ;
    for(let i = row * N + col + 1; i < N * N; i++) {
        if(grid[i / N][i % N] == 0){
            index = i;
            break;
        }
    }
    nrow = index / N;
    ncolumn = index % N;
}