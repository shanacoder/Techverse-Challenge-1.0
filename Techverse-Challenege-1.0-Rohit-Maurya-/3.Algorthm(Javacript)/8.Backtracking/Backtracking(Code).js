function solveNQueens(n) {
    const result = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isValid(row, col) {
        // Check if there is a queen in the same column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }

        // Check if there is a queen in the same diagonal (upper left)
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }

        // Check if there is a queen in the same diagonal (upper right)
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }

        return true;
    }

    function backtrack(row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }

    backtrack(0);
    return result;
}

// Example usage:
console.log(solveNQueens(4)); // Outputs all possible solutions for 4-queens problem
function subsetSum(nums, target) {
    const result = [];

    function backtrack(start, subset, sum) {
        if (sum === target) {
            result.push([...subset]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            if (sum + nums[i] <= target) {
                subset.push(nums[i]);
                backtrack(i + 1, subset, sum + nums[i]);
                subset.pop();
            }
        }
    }

    backtrack(0, [], 0);
    return result;
}

// Example usage:
console.log(subsetSum([2, 3, 6, 7], 7)); // Outputs all subsets with sum equal to 7
