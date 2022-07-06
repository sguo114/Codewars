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
