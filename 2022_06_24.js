// kata completed

// 6kyu: up AND down
function arrange(strng) {
  let arr = strng.split(' ')
  for(let i = 0; i<arr.length; i++){
    
    if(i === arr.length-1){
      arr[i] = i%2 === 0 ? arr[i].toLowerCase() : arr[i].toUpperCase(); 
      break;
    }
       
    if(i%2 === 0 && arr[i].length > arr[i+1].length || 
       i%2 !== 0 && arr[i].length < arr[i+1].length){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
    }
    
    arr[i] = i%2 === 0 ? arr[i].toLowerCase() : arr[i].toUpperCase()  
  }
  return arr.join(' ')
}
