// kata completed

// 6kyu: Sum of Parts
function partsSums(ls) {
  let ans = [ls.reduce((a,b)=>a+b,0)]
  for(let i = 0; i<ls.length; i++){
    let sum = ans[i]
    ans.push(sum-ls[i])
  }
  return ans
}
