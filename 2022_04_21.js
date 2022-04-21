// 1 kata completed

// 6kyu: Hidden Cubic Numbers
function isSumOfCubes(s){
  let arr = [], ans = [], string =''
  s = s.replace(/\s/g,'-')
  console.log(s)
  
  for(let i =0; i<s.length; i++){
    if(!isNaN(s[i])&&!isNaN(s[i+1])&&!isNaN(s[i+2])){
      arr.push(s[i]+s[i+1]+s[i+2])
      i=i+2
    } else if(!isNaN(s[i])&&!isNaN(s[i+1])){
      arr.push(s[i]+s[i+1])
      i=i+2
    } else if(!isNaN(s[i])){
      arr.push(s[i])
      i=i+1
    }
  }
        
  for(let i = 0; i<arr.length;i++){
      arr[i].length>2?ans.push((Math.pow(arr[i][0],3)+Math.pow(arr[i][1],3)+Math.pow(arr[i][2],3))==arr[i]):
      arr[i].length>1?ans.push((Math.pow(arr[i][0],3)+Math.pow(arr[i][1],3))==arr[i]):
      ans.push(Math.pow(arr[i][0],3)==arr[i]);
    
      arr[i] == 0? string+='0 ':ans[i] == true?string+=arr[i]+' ':string = string
    }

  let sum = string.split(' ').reduce((a,b)=>Number(a)+Number(b))
  console.log(ans,string,sum)
  
  string.length>1? string+=`${sum} Lucky`: string+='Unlucky'
  return string
  
}
