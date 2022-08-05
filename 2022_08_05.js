// kata completed

// Nested List Depth
function arrayDepth(array) {
  let ans = 1, local = 1
  for(let i = 0; i<array.length; i++){
    if(Array.isArray(array[i])){
      local += arrayDepth(array[i])
      ans = Math.max(local, ans)
    }
    local = 1
  }
	return ans; 
}
