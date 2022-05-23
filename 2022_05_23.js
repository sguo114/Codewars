// 2 kata completed

// 6kyu:Your order, please
function order(words){
  let arr = words.split(' '), obj = {}
  
  for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr[i].length; j++){
      if(!isNaN(arr[i][j])){
        obj[arr[i][j]] = arr[i]
      }
    }
  }
  let ans = Object.keys(obj).sort((a,b)=>a-b).map(el=>obj[el])
  
  return ans.join(' ')
}

// 6 kyu: Run-length encoding
var runLengthEncoding = function(str){
  let ans = [], count = 0
  for(let i = 0; i<str.length;i++){
    if(i == 0){
      ans.push([1,str[i]])
    } else if(str[i] !== str[i-1]){
      ans.push([1, str[i]])
    } else {
      ans[count-=1][0] += 1
    }
    count += 1
  }
  return ans
}
