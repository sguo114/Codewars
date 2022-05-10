// 5 kata completed

// 4 kyu: Remove Zeros (no array or string methods allowed, no temporary arrays)
function removeZeros(array) {
  if(array.length<1){return array}
  
  let swap = true
  
  while(swap == true){
    let count = 0
    for(let i = 0; i< array.length-1; i++){
      if((array[i] === 0 || array[i] ==='0') && (array[i+1]!=0||array[i+1] === false)){
        let temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
      } else {
        count += 1
      }
    }
    count == array.length-1? swap = false: swap = true
  }
  
  return array;
}

// 6kyu: Build Tower
function towerBuilder(nFloors) {
  let stars = nFloors*2 - 1, space = 0, ans = []
  
  for(let i = 0; i<nFloors; i++){
    ans.push(' '.repeat(space) + '*'.repeat(stars) + ' '.repeat(space))
    stars -= 2
    space += 1
  }
  
  return ans.reverse()
}

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

// 8kyu: Can we divide it?
function isDivideBy(number, a, b) {
  return number%a == 0 && number%b ==0
}
