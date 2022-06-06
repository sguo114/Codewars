// 3 kata completed

// 6kyu: Mad Max: Recursion Road- Find maximum or array without loops or Math.max
function max(array) {
  if(array.length < 1) return -Infinity
  if(array.length === 1) return array[0]
  
  const localMax = max(array.slice(1))
  return array[0] > localMax ? array[0] : localMax
}

// 7kyu: Find the next perfect square
function findNextSquare(sq) {
  let root = Math.sqrt(sq)
  return Number.isInteger(root) ? Math.pow(root+1,2) : -1;
}

// 8kyu: Add Length
function addLength(str) {
  let arr = str.split(' ')
  return arr.map(el=> `${el} ${el.length}`)
}
