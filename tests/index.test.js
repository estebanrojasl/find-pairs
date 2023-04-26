const { findPairs } = require("../src/find-pairs");

describe("findPairs", () => {
  test("returns empty array if no pairs found", () => {
    const numbers = [1, 2, 3, 4, 5];
    const targetSum = 10;
    const pairs = findPairs(numbers, targetSum);
    const expectedPairs = [];
    expect(pairs.map((pair) => pair.sort())).toEqual(
      expectedPairs.map((pair) => pair.sort())
    );
  });

  test("returns single pair if only one pair found", () => {
    const numbers = [1, 2, 3, 4];
    const targetSum = 6;
    const pairs = findPairs(numbers, targetSum);
    const expectedPairs = [[2, 4]];
    expect(pairs.map((pair) => pair.sort())).toEqual(
      expectedPairs.map((pair) => pair.sort())
    );
  });

  test("returns multiple pairs if multiple pairs found", () => {
    const numbers = [1, 2, 3, 4, 5];
    const targetSum = 6;
    const pairs = findPairs(numbers, targetSum);
    const expectedPairs = [
      [4, 2],
      [5, 1],
    ];
    expect(pairs.map((pair) => pair.sort())).toEqual(
      expectedPairs.map((pair) => pair.sort())
    );
  });

  test("returns empty array for empty input", () => {
    const numbers = [];
    const targetSum = 10;
    const pairs = findPairs(numbers, targetSum);
    const expectedPairs = [];
    expect(pairs.map((pair) => pair.sort())).toEqual(
      expectedPairs.map((pair) => pair.sort())
    );
  });

  test("returns empty array if targetSum is 0", () => {
    const numbers = [1, 2, 3, 4, 5];
    const targetSum = 0;
    const pairs = findPairs(numbers, targetSum);
    const expectedPairs = [];
    expect(pairs.map((pair) => pair.sort())).toEqual(
      expectedPairs.map((pair) => pair.sort())
    );
  });

  test("returns empty array if only one number in input", () => {
    const numbers = [1];
    const targetSum = 1;
    const pairs = findPairs(numbers, targetSum);
    const expectedPairs = [];
    expect(pairs.map((pair) => pair.sort())).toEqual(
      expectedPairs.map((pair) => pair.sort())
    );
  });
});
