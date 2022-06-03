// kata completed

// 6kyu: Matrix Addition
function matrixAddition(a, b){
  return a.map( (el,i) => el.map((a,j) => a+b[i][j]))
}
