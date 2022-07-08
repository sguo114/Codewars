// kata completed

// 6kyu: Rank Vector
function ranks(a) {
  let rank = {},
      sorted = a.slice().sort((a,b)=>b-a)
   
  for(let i = 0; i<sorted.length;i++){
    if(sorted[i] == sorted[i-1]) continue; 
    rank[sorted[i]] = i+1    
  }
  
  return a.map(el=> rank[el])
}
