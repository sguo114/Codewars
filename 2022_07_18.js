// kata completed

// 7kyu: Largest pair sum in a sequence
function largestPairSum (numbers) {
  let big1 = Math.max(numbers[0], numbers[1]), big2 = Math.min(numbers[0], numbers[1])
  for(let i = 2; i<numbers.length; i++){
    if(numbers[i]>big1){
      big2 = big1
      big1 = numbers[i]
    } else if(numbers[i]>big2){
      big2 = numbers[i]
    }
  }
  return big1 + big2
}
