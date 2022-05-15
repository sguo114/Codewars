// kata completed

// 6kyu: Integer Depth
function computeDepth (x){
  let arr = []
  for(let i = 1; ; i++){
    arr.push(String(x*i).split(''))
    if([...new Set([].concat(...arr))].length === 10){
      return i
    }
  }
  return 0
}
