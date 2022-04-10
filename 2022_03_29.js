// 8kyu: Find the first non-consecutive number
function firstNonConsecutive (arr) {
  let array = []
  console.log(arr)
  for(let i =0; i<arr.length-1; i++){
    if(arr[i+1] != arr[i]+1){
      array.push(arr[i+1])
    } 
  } 
  
  return array[0] === undefined ? null : array[0]
}
