function solution(coins) {
  let sum = 0;
  let currentSum = 0;

  console.log("sum", sum);

  // running for loop coin
  //
  for (let index = 0; index < coins.length; index++) {
    const element = coins[index];

    if (currentSum < coins[index]) {
      console.log("here");
      break;
    }
    currentSum += element;

    console.log("currentsum", currentSum);
    console.log("nextcoin", coins[index]);
  }

  return currentSum + 1;
}
// 1st case
// const coins = [5, 7, 1, 1, 2, 3, 22]; // 20
//2ndcase
// const coins = [1, 1, 1, 1, 1]; // 6

// 3rd case
// const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100]; // 55

// 4th case
const coins = [1, 2, 5]; // 4

// O(log(n))
coins.sort((a, b) => a - b);

console.log("sorted", coins);

// O(n * log(n)) => n = number of coins
const sol = solution(coins);

console.log("solo", sol);
