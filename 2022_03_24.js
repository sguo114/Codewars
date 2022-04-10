// 5kyu: Moving Zeros to the End (2 solutions)
//solution 1
function moveZeros(arr) {
  console.log(arr)
  let j = 0;
  for(let i = 0; i<arr.length; i++){
    if (arr[j] ===0){
      arr.splice(j,1)
      arr.push(0)
      j = j 
    } else {j +=1}
  }
  return arr
}

//solution 2
function moveZeros(arr) {
  return arr.filter((x)=> x!==0).concat(arr.filter((x)=> x===0))
}
