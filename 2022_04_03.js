// 8kyu: Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  let merged = arr1.concat(arr2)
  console.log(merged)
  merged.sort((a,b)=> a-b)
  for (let i =0; i<merged.length-1; i++){
    if(merged[i]===merged[i+1]){
      merged.splice(i,1)
    }
  }
  
  return merged
}
