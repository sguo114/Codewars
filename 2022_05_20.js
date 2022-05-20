// kata completed

// 6kyu: Is a number prime?
function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 6kyu: Sum of Parts
function partsSums(ls) {
  let ans = [ls.reduce((a,b)=>a+b,0)]
  for(let i = 0; i<ls.length; i++){
    let sum = ans[i]
    ans.push(sum-ls[i])
  }
  return ans
}
