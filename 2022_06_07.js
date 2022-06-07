// kata completed

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
