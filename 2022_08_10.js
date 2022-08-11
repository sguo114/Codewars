// kata completed

// 6kyu: Check if two words are isomorphic to each other
function isomorph(a,b) {
  if(a.length !== b.length) return false
  let aTest = {}, bTest = {}
  
  for(let i = 0; i<a.length; i++){
    if(aTest[a[i]] || bTest[b[i]]){
      if(aTest[a[i]] !== b[i]) return false
      if(bTest[b[i]] !== a[i]) return false
      continue;
    } 
    aTest[a[i]] = b[i]
    bTest[b[i]] = a[i]
  }
  return true
}
