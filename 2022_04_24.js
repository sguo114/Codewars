// 2 kata completed

// 6 kyu: Consecutive Strings
function longestConsec(strarr, k) {
  let arr = {} 
  for(let i = 0; i<= strarr.length-k;i++){
    let string = ''
    for(let j = 0; j<k;j++){
      string += strarr[i+j]
    }
    arr[string] = string.length
  }
  let max = Math.max(...Object.values(arr))
  return k>strarr.length?'':Object.keys(arr).find(key => arr[key] === max);
}

// 7 kyu: Remove the minimum 
function removeSmallest(numbers) {
  let min = numbers[0], arr = []
  numbers.forEach((e,i,a)=> {
    min > e? min =e: min;
    arr.push(e)
  })
  arr.splice(numbers.indexOf(min),1)
  return arr
}
