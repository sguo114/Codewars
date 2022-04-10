// 4 kyu: Snail
snail = function(array) {
  // enjoy
  let answer = [];
  let ni = array.length
  console.log(array)
  
  if(array[0].length < 1){
    return []
  } else {
    for (let i = 0; i <ni; i++){
      let n = array.length
      for (let j = 0; j<n; j++){
        answer.push(array[0][j]) //first row into answer array
      }
      for (let k = 1; k<n; k++){
        answer.push(array[k][n-1])
      }
      for(let l = 0; l<n; l++){
        array[l].pop()
        array[l].reverse()        
      }
        array.reverse()
        array.pop()
    }
    return answer
      }
  
}
