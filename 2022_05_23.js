// kata completed

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
