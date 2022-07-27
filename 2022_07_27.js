// kata completed

// 7kyu: Help the Fruit Guy
function removeRotten(bagOfFruits){
  let ans = []
  for(var i in bagOfFruits){
    let fruit = bagOfFruits[i]
    fruit.includes('rotten') ? ans.push(fruit.slice(6).toLowerCase()) : ans.push(fruit) 
  }
  return ans
}
