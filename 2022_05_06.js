// 2 kata completed

// 6kyu: Separating Strings
function sepStr(str) {
  let words = str.split(' '),
      longest = Math.max(...words.map(el=>el.length)),
      ans = Array(longest)
  
  for(let i = 0 ; i<words.length; i++){
    for(let j = 0; j<ans.length; j++){
      !ans[j] ? ans[j] = [] : ans
      words[i][j] ? ans[j].push(words[i][j]) : ans[j].push('')
    }
  }

  return ans
}

// 6kyu: No one likes carrying change
function coinsNeeded(amount, coinDenominations) {
  let last = coinDenominations.length-1, count = 0
  
  coinDenominations.sort((a,b)=>b-a).forEach(el=>{
    count += Math.floor(amount/el)
    amount = amount%el})
    
  return count
}
