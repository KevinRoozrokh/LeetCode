function spiralOrder(matrix) {
    if (matrix.length === 0) return [];
    let result = [];
    let row = 0;
    let col = 0;
    let rowEnd = matrix.length - 1;
    let colEnd = matrix[0].length - 1;
    while (row <= rowEnd && col <= colEnd) {
        for (let i = col; i <= colEnd; i++) {
        result.push(matrix[row][i]);
        }
        row++;
        for (let i = row; i <= rowEnd; i++) {
        result.push(matrix[i][colEnd]);
        }
        colEnd--;
        if (row <= rowEnd) {
        for (let i = colEnd; i >= col; i--) {
            result.push(matrix[rowEnd][i]);
        }
        rowEnd--;
        }
        if (col <= colEnd) {
        for (let i = rowEnd; i >= row; i--) {
            result.push(matrix[i][col]);
        }
        col++;
        }
    }
    return result;

}

module.exports = spiralOrder;
