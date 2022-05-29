// 2 kata completed

// 6kyu: Pair of Gloves
function numberOfPairs(gloves){
  let pairs = {}, ans = 0
  for(let i = 0; i<gloves.length;i++){
    if(pairs[gloves[i]]){
      if(pairs[gloves[i]]%2 == 1){
        ans++
      }
      pairs[gloves[i]] += 1
    } else{
      pairs[gloves[i]] = 1
    }
  }
  return ans
}
