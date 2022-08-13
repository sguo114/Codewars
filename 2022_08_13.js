// kata completed

// 6kyu: Arrh, grabscab! 
function grabscrab(anagram, dictionary) {
  let ans = []
  for(let i = 0; i<dictionary.length; i++){
    if(checkAna(anagram, dictionary[i])) ans.push(dictionary[i])
  }
  return ans
}

var checkAna = function(a, b){
  if(a.length !== b.length) return false

  let charMap = new Map()
  for(const char of a){
    charMap.set(char, (charMap.get(char) || 0) + 1)
  }
  for(const char of b){
    if(!charMap.has(char) || charMap.get(char) === 0) return false
    charMap.set(char, charMap.get(char) - 1)
  }
  return true
}

// 7kyu: Exes and Ohs
function XO(str) {
  let x = 0, o = 0
  for(let i = 0; i<str.length; i++){
    if(str[i].toLowerCase() == 'x') x++
    if(str[i].toLowerCase() == 'o') o++
  }
  return x == o
}
