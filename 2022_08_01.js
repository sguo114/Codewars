// kata completed

// 6kyu: Sum of digits/ Digial Root
function digitalRoot(n) {
  let str = String(n)
  if(str.length == 1) return n
  
  let ans = str.split('').reduce((a,b)=>Number(a)+Number(b))
  return digitalRoot(ans)
}
