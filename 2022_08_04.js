// kata completed

// 7kyu: See you next happy year
function nextHappyYear(year){
  let isHappyYear = false
  while(!isHappyYear){
    year += 1
    let str = String(year), mySet = new Set()
    for(let i = 0; i<str.length; i++){
      if(mySet.has(str[i])){
        isHappyYear = false
        break;
      }
      mySet.add(str[i])
      isHappyYear = true
    }
  }
  return year
}
