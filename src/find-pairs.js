function findPairs(numbers, targetSum) {
  const complements = {};

  return numbers.reduce((pairs, num) => {
    const complement = targetSum - num;
    if (complements[complement]) {
      pairs.push([num, complement]);
    }
    complements[num] = true;
    return pairs;
  }, []);
}

exports.findPairs = findPairs;
