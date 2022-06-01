// 4 kata completed

// 6kyu: Reverse or Rotate
function revrot(str, sz) {
  let ans = ""
  if(sz == 0 || sz>str.length) return ans
  
  for(let i = 0; i<Math.floor(str.length/sz); i++){
    let window = str.slice(i*sz,i*sz+sz), sum = 0
    
    for(let j = 0; j<window.length; j++){
      sum += Math.pow(window[j],3)
    }
    ans += sum%2 == 0 ? window.split('').reverse().join('') : (window.slice(1) + window.slice(0,1))
  }
  return ans
}

// 6kyu: Help the bookseller!
function stockList(listOfArt, listOfCat){
  let freq = {}, ans = ""
  
  if(listOfArt <1 || listOfCat<1) return ""
  
  for(let i = 0; i< listOfArt.length; i++){
    if(freq[listOfArt[i][0]]){
      freq[listOfArt[i][0]] += Number(listOfArt[i].split(' ')[1])
    } else{
      freq[listOfArt[i][0]] = Number(listOfArt[i].split(' ')[1])
    }
  }
  
  for(let i = 0; i<listOfCat.length; i++){
    let temp = `(${listOfCat[i]} : ${freq[listOfCat[i]] || 0})`
    ans += temp
    if(i<listOfCat.length-1){
      ans+= ' - '
    }
  }
  
  return ans
}

// 7kyu: Printer Errors
function printerError(s) {
  let count = 0
  for(let i = 0; i<s.length; i++){
        if(/[n-z]/g.test(s[i])){
          count++
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  }
  return `${count}/${s.length}`
}

// 8kyu: Vowel Remover
function shortcut (string) {
  return string.split('').filter(el => /[^aeiou]/g.test(el)).join('');
}
