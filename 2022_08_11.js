// kata completed

// 6kyu: The vowel code
function encode(string) {
  let key = {a:1, e:2, i:3, o:4, u:5}, 
      arr = string.split('')
  
  for(let i = 0; i<arr.length; i++){
    if(key[arr[i]]) arr[i] = key[arr[i]]
  }
  
  return arr.join('')
}

function decode(string) {
  let key = {1:'a', 2:'e', 3:'i', 4:'o', 5:'u'}, 
      arr = string.split('')
  
  for(let i = 0; i<arr.length; i++){
    if(key[arr[i]]) arr[i] = key[arr[i]]
  }
  
  return arr.join('')
}
