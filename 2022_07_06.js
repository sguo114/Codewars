// kata completed

// 6kyu: Find the discounted prices
function findDiscounted(prices){
  let record = {}, ans = [], price = prices.split(' ')

  for(let i = 0; i<price.length; i++){
    if(record[price[i]]){
      if(record[price[i]]>=1){
        ans.push(price[i]*.75)
        record[price[i]] -= 1        
      } else{
        record[price[i]/.75] += 1
      }
    } else{
      if(record[price[i]/.75]) record[price[i]/.75] += 1
      else record[price[i]/.75] = 1
    }
  }
  
  return ans.join(' ')
}

// 6kyu: The Shell Game (cup swaps- find the ball given swaps)
find_the_ball=function(start,swaps){
  let last = start
  for(let i = 0; i<swaps.length; i++){
    if(swaps[i][0] == last) last = swaps[i][1]
    else if(swaps[i][1] == last) last = swaps[i][0]
  }
  return last
}
