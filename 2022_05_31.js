// 4 kata completed

// 6kyu: Fun with lists: countIf
function countIf(head, p) {
  let list = head, count = 0
  
  while(list){
    if(p(list.data)) count++
    
    list = list.next
  }
  
  return count;
}

// 6kyu: The Deaf Rats of Hamelin
var countDeafRats = function(town) {
  let right = [], PP = false, count = 0

  for(let i = 0; i<town.length; i++){
    if(town[i] == 'P'){
      PP = true
      continue;
    }
    
    if(right.length<1 && PP == false && town[i] == '~'){
      right.push(town[i])
      continue;
    } else if(right.length<1 && PP == true && town[i]=='O'){
      right.push(town[i])
      continue;
    } else if(right.length<1 && town[i]!=' ') {
      right.push(town[i])
      count++
      continue;
    }
    
    if(town[i] == '~' || town[i] == 'O') right.pop()
  }
  return count;
}

// 8kyu: Sum Mixed Array
function sumMix(x){
  return x.reduce((a,b)=>a+Number(b), 0)
}

// 8kyu: Keep Hydrated
function litres(time) {
  return Math.floor(time*.5);
}
