const readline = require("readline");
const { findPairs } = require("./find-pairs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];
let targetSum = 0;

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Input the numbers separated by comma\n", (string) => {
      numbers = string.split(",").map((num) => parseInt(num, 10));
      resolve();
    });
  });
};

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Input target sum number\n", (string) => {
      targetSum = parseInt(string, 10);
      resolve();
    });
  });
};

(async () => {
  await question1();
  await question2();
  const pairs = findPairs(numbers, targetSum);
  console.log(pairs);
  rl.close();
})();
