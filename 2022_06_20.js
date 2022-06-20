// kata completed

// 6kyu: Find the missing term in an Arithmetic Progression
var findMissing = function (list) {
  let diff1 = list[list.length-1] - list[list.length-2],
      diff2 = list[1] - list[0],
      diff = Math.abs(diff1) <= Math.abs(diff2) ? diff1 : diff2
  
  for(let i = 1; i< list.length; i++){
    if(list[i] !== list[i-1] + diff){
      return list[i-1] + diff
    }
  }
}
