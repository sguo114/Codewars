// 4 kata completed

// 3kyu: The soul of wit: reverse an array
reverse=a=>a.map(a.pop,[...a])

// 4kyu: Adding Big Numbers
function add(a, b) {
  let longer = a.length>b.length? a.split('').reverse(): b.split('').reverse(),
      shorter = a.length>b.length? b.split('').reverse():a.split('').reverse(),
      ans = []
  
  for(let i = 0; i<longer.length; i++){
    if(shorter[i]){
      ans.push(Number(longer[i])+Number(shorter[i]))
    } else{
      ans.push(Number(longer[i]))
    }
  }
  
  for(let i = 0; i<ans.length; i++){
    if(ans[i]>9){
      ans[i] -= 10
      ans[i+1] ? ans[i+1] += 1 : ans.push(1)
    }
  }
  
  return ans.reverse().join('')
}

// 4kyu: Reverse it quickly ---- bad kata. Solution does not work in chrome.
weirdReverse=a=>a.sort(_=>1)

// 4kyu: Multiplying numbers as strings
function multiply(a, b){
  return String(BigInt(a) * BigInt(b))
}