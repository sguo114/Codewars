// kata completed

// 6kyu: Sorting on Planet Twisted 3-7
function sortTwisted37(array) {
  let ans = []
  
  var swap = (arr) => {
    let newArr = []
    for(let i = 0; i<arr.length; i++){
      let str = [...String(arr[i])]
      
      for(let j = 0; j<str.length; j++){
        if(str[j] == '3'){str[j] = '7'}
        else if(str[j] == '7'){str[j] = '3'}
      }
      
      newArr.push(Number(str.join('')))
    }
    
    return newArr
  }
    
  return swap(swap(array).sort((a,b)=>a-b));
}
