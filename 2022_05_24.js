// kata completed

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
