// 2 kata completed

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

// 8kyu: Vowel Remover
function shortcut (string) {
  return string.split('').filter(el => /[^aeiou]/g.test(el)).join('');
}
