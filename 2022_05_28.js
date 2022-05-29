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

// 8kyu: I love you a little, a lot, passionately,... not at all
function howMuchILoveYou(nbPetals) {
    return nbPetals%6 == 1 ? "I love you" :
    nbPetals%6 == 2 ? "a little" :
    nbPetals%6 == 3 ? "a lot" :
    nbPetals%6 == 4 ? "passionately" :
    nbPetals%6 == 5 ? "madly" : "not at all"
}
