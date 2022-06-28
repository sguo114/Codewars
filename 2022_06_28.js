// kata completed

// 8kyu: How many stairs will Suzuki climb in 20years?
function stairsIn20(s){
  let sum = 0
  for(var day of s) sum += day.reduce((a,b)=> a+b)
  return sum*20
}
