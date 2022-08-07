// kata completed

// 7kyu: How many consecutive numbers are needed
function consecutive(arr) {
  let min = Math.min(...arr), max = Math.max(...arr), ans = 0
  
  for(let i = min; i< max; i++){
    if(!arr.includes(i)) ans++
  }
  
  return ans
}
