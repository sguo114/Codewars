// kata completed

// 7kyu: Sum of two lowest possible integers
function sumTwoSmallestNumbers(numbers) {  
  let min1 = Math.min(numbers[0], numbers[1]), min2 = Math.max(numbers[0], numbers[1])
  for(let i = 2; i<numbers.length; i++){
    if(numbers[i] < min1){ 
      min2 = min1
      min1 = numbers[i]
    } else if(numbers[i] < min2){
      min2 = numbers[i]
    }
  }
  return min1 + min2
}

// 7kyu: Sum of Minimums!
function sumOfMinimums(arr) {
  let sum = 0; 
  arr.forEach(el=> sum += Math.min(...el))
  return sum
}
