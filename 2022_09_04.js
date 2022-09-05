// kata completed

// 6kyu: Make the Deadfish Swim
function parse( data ){
  let val = 0, 
      ans = []
  for(let i = 0; i<data.length; i++){
    switch(data[i]){
        case 'i':
          val++
          break;
        case 'd':
          val--
          break;
        case 's':
          val = Math.pow(val, 2)
          break;
        case 'o':
          ans.push(val)
          break;
        default:
          break;
    }
  }
  return ans
}
