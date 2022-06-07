// 2 kata completed

// 6kyu: Pascal's Triangle #2
function pascal(depth) {
  let arr = [[1], [1,1]]
  
  if(depth === 1) return [[1]]
  if(depth === 2) return arr
  
  for(let i = 2; i<depth; i++){
    arr.push([])
    for(let j = 0; j<=i; j++ ){
      if(j == 0) {
        arr[i].push(1)
        continue;
      }
      if(j == i) {
        arr[i].push(1)
        continue;
      }
      arr[i].push(arr[i-1][j-1] + arr[i-1][j])
    }
  }
  
  return arr
}

// 7kyu: Sorted? yes? no? how?
function isSortedAndHow(array) {
  if(array[0]>array[1]){
    for(let i = 1;i<array.length; i++){
      if(array[i-1] < array[i]) return 'no'
    }
    return 'yes, descending'
  }
  
  if(array[0]<array[1]){
    for(let i = 1;i<array.length; i++){
      if(array[i-1] > array[i]) return 'no'
    }
    return 'yes, ascending'
  }
}
