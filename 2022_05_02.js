// kata completed

// 6kyu: Smallest Permutation
function minPermutation(n) {
  let ans = String(n).split('').sort((a,b)=>a-b)
  console.log(ans)
  if(ans[0] == 0){
    let lowest
    for(let i = 1; i<ans.length;i++){
      if(ans[i]!=0){
        lowest = i; 
        break;
      }
    }
    let temp = ans[0]
    ans[0] = ans[lowest]
    ans[lowest] = temp
  } else if(ans[0] == '-' && ans[1] == 0){
    let lowest
    for(let i = 1; i<ans.length;i++){
      if(ans[i]!=0){
        lowest = i; 
        break;
      }
    }
    let temp = ans[1]
    ans[1] = ans[lowest]
    ans[lowest] = temp
  }
  
  return Number(ans.join(''))
}
