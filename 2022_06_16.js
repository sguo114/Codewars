// kata completed

// 6kyu: Simple Frequency Sort
function solve(arr){
  let freq = {}
  for(let i of arr){
    freq[i] = freq[i]+1 || 1
  }
  return arr.slice().sort((a,b)=>freq[b]-freq[a]||a-b)
}
