// 7kyu: Mumbling
function accum(s) {
  // your code
  let x = ''
  
  for(let i = 0; i<s.length; i++){
    let letter = s[i]
    
    for (let j = 0; j<i+1; j++){
      if(i === 0){
        x += s[i].toUpperCase()
      } else if(j === 0){
        x += '-' + s[i].toUpperCase()
      } else{
        x += s[i].toLowerCase()
        }
    }
  }
    
  return x
}
