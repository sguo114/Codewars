// kata completed

// 7kyu: Sum of Minimums!
function sumOfMinimums(arr) {
  let sum = 0; 
  arr.forEach(el=> sum += Math.min(...el))
  return sum
}
