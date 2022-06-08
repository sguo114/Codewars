// kata completed

// 7kyu: Predict your age!
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
  return Math.floor(Math.sqrt(arr.map(el=>el*el).reduce((a,b)=>a+b))/2)
}
