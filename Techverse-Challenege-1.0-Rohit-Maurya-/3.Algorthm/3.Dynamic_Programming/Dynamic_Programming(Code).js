// Fibonacci using memoization
const fibMemo = {};
function fibonacciMemo(n) {
    if (n <= 1) {
        return n;
    }
    if (fibMemo[n]) {
        return fibMemo[n];
    }
    fibMemo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
    return fibMemo[n];
}

// Fibonacci using bottom-up approach
function fibonacciBottomUp(n) {
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

// Knapsack problem
function knapsack(values, weights, capacity) {
    const n = values.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= capacity; j++) {
            if (weights[i - 1] <= j) {
                dp[i][j] = Math.max(dp[i - 1][j], values[i - 1] + dp[i - 1][j - weights[i - 1]]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[n][capacity];
}

// Longest Common Subsequence
function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}

// Example usage:
console.log("Fibonacci using memoization:");
console.log(fibonacciMemo(6)); // Output: 8

console.log("\nFibonacci using bottom-up approach:");
console.log(fibonacciBottomUp(6)); // Output: 8

console.log("\nKnapsack problem:");
const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
console.log(knapsack(values, weights, capacity)); // Output: 220

console.log("\nLongest Common Subsequence:");
const str1 = "ABCDGH";
const str2 = "AEDFHR";
console.log(longestCommonSubsequence(str1, str2)); // Output: 3
