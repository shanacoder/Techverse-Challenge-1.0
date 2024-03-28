function minCoinChange(coins, amount) {
    coins.sort((a, b) => b - a); // Sort coins in descending order

    const result = [];
    let remainingAmount = amount;

    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        const count = Math.floor(remainingAmount / coin);
        result.push({ coin, count });
        remainingAmount -= coin * count;

        if (remainingAmount === 0) {
            break; // If remainingAmount becomes zero, we have found the solution
        }
    }

    return result;
}

// Example usage:
const coins = [25, 10, 5, 1];
const amount = 43;
console.log(minCoinChange(coins, amount));
