// kata completed

// 7kyu: Highest and Lowest
function highAndLow(numbers){
  let nums = numbers.split(' ').map(el=>Number(el))
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}
