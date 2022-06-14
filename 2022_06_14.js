// kata completed

// 7kyu: Length and two values
function alternate(n, firstValue, secondValue){
  let ans = []
  for(let i = 0; i<n; i++){
    i%2 === 0 ? ans.push(firstValue) : ans.push(secondValue)
  }
  return ans
}
