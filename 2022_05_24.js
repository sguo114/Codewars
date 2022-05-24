// kata completed

// 6kyu: Reach Me and Sum my Digits
function sumDigNthTerm(initval, patternl, nthterm) {
  let sum = initval  
  for(let i = 0; i<nthterm-1; i++){
      sum += patternl[i%patternl.length]
  }
  return String(sum).split('').reduce((a,b)=>Number(a)+Number(b))
}
