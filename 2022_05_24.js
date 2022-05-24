// kata completed

// 5kyu: Fibo akin
function lengthSupUK(n, k) {
  let u = [1,1], ans = k <= 1 ? 2:0
  
  for(let i = 2; i<n; i++){
    u.push(u[i-u[i-1]]+u[i-u[i-2]])
    if(u[i]>=k) ans++
  }
  
  return ans
}

function comp(n) {
  let u = [1,1], ans = 0
  
  for(let i = 2; i<n; i++){
    u.push(u[i-u[i-1]]+u[i-u[i-2]])
    if(u[i]<u[i-1]) ans++
  }
  return ans
}

// 6 kyu: Matrix Transpose
function transpose(matrix) {
  let ans = []
  for(let i = 0; i<matrix[0].length; i++){
    ans.push([])
    for(let j = 0; j<matrix.length; j++){
      ans[i].push(matrix[j][i])
    }
  }
  return ans
}

// 6kyu: Reach Me and Sum my Digits
function sumDigNthTerm(initval, patternl, nthterm) {
  let sum = initval  
  for(let i = 0; i<nthterm-1; i++){
      sum += patternl[i%patternl.length]
  }
  return String(sum).split('').reduce((a,b)=>Number(a)+Number(b))
}

// 7kyu: Sum of all the multiples of 3 or 5
function findSum(n) {
  let sum = 0
  for(let i = 0; i<=n; i++){
    sum += (i%3 === 0 || i%5 === 0) ? i : 0
  }
  return sum;
}
