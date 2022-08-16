// kata completed

// 6kyu: How many pages in a book?
function amountOfPages(summary){
  let digits = {1:9, 2:90*2, 3:900*3, 4:9000*4, 5:90000*5}, ans = 0
  
  for(let i = 1; i<=5; i++){
    if(summary - digits[i] >= 0){
      summary -= digits[i]
      ans += digits[i]/i
    } else{
      ans += summary/i;
      break;
    }
  }

  return ans
