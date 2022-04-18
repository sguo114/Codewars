// 8kyu: Reversed sequence
const reverseSeq = n => {
  let ans = []
  for(let i = 0; i<n; i++){
    ans.push(n-i)
  }
  return ans;
};
