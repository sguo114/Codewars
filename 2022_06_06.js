// kata completed

// 8kyu: Add Length
function addLength(str) {
  let arr = str.split(' ')
  return arr.map(el=> `${el} ${el.length}`)
}
