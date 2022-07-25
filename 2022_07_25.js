// kata completed

// 6kyu: Frog Jumping
function solution(a) {
  let ind = 0, ans = 0, hist = {}  
  while(ind < a.length){
    if(hist[ind]) return -1
    else if(ind<0) return ans
    else hist[ind] = 1
    
    ind = ind + a[ind]
    ans++
  }
  return ans
}
