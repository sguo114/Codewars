// 2 kata completed


// 6kyu: Where is my parent?
function findChildren(dancingBrigade) {
  let peeps = dancingBrigade.split('').sort(), 
      adults = peeps.filter(el=>el == el.toUpperCase()),
      kids = peeps.filter(el=>el == el.toLowerCase()),
      kidCount = {}
  
  for(let i = 0; i<kids.length;i++){
    kidCount[kids[i]] ? kidCount[kids[i]] += 1 : kidCount[kids[i]] = 1
  }
  
  return adults.map(el=>el + el.toLowerCase().repeat(kidCount[el.toLowerCase()])).join('');
}

// 6kyu: 1/n- Cycle
function cycle(n) {
  if(n%2==0 || n%5==0){
    return -1
  } else {
    let result = 10%n , count = 1
    while(result!=1){
      result = (result*10)%n
      count ++
    }
    return count
  }
}
