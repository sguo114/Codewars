// kata completed

// 7kyu: Exes and Ohs
function XO(str) {
  let x = 0, o = 0
  for(let i = 0; i<str.length; i++){
    if(str[i].toLowerCase() == 'x') x++
    if(str[i].toLowerCase() == 'o') o++
  }
  return x == o
}
