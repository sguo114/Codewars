// kata completed

// 7kyu: Most digits
function findLongest(array){
  let ansInd = 0, ans = String(array[0]).length
  
  for(let i = 0; i<array.length; i++){
    let str = String(array[i])
    if(str.length > ans){
      ansInd = i
      ans = str.length
    }
  }
  
  return array[ansInd]
}
