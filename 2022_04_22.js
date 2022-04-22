// 13 kata completed

// 5kyu: Directions Reduction
function dirReduc(arr){
  let temp = 0
  while(temp != arr.length){
    temp = arr.length
    splice(arr)
  }
  return arr
}

function splice(arr){
  let fin = 0
  for(let i = 0; i<arr.length; i++){
    (arr[i] == 'NORTH'&&arr[i+1] =='SOUTH')||(arr[i]=='SOUTH'&&arr[i+1]=='NORTH')?
      arr.splice(i,2):
    (arr[i] =='EAST'&&arr[i+1]=='WEST')||(arr[i+1]=='EAST'&&arr[i]=='WEST')?
      arr.splice(i,2):arr
  }
  return arr
}

// 6kyu: Sort the Odd
function sortArray(array) {
  let odds = array.filter(x=> x%2 != 0 ).sort((a,b)=>a-b), 
      j = 0
  
  for(let i = 0; i<array.length;i++){
    if(array[i]%2 != 0){
      array[i] = odds[j]
      j++
    } 
  }
  return array
}

// 6 kyu: Find the odd int
function findOdd(A) {
  let freq = {}
  for(let i = 0; i<A.length; i++){
    if(freq[A[i]]){
      freq[A[i]] += 1
    }else{
      freq[A[i]] = 1
    }
  }
  let odd = Object.values(freq).filter(n=>n%2==1)[0]
  return Number(Object.keys(freq).find(key=>freq[key]===odd))
}

// 6 kyu: Highest Scoring Word
function high(x){
  let abc = 'abcdefghijklmnopqrstuvwxyz', 
      words = x.split(' '),
      score = []
  
  for(let i = 0; i<words.length;i++){
    let word = words[i]
    score.push(0)
    for(let j = 0; j<word.length; j++){
      score[i] += abc.indexOf(word[j])+1
    }
  }
  
  let index = score.indexOf(Math.max(...score))
  return words[index]
}

// 6 kyu: Take a Ten Minutes Walk
function isValidWalk(walk) {
  let northSouth = {'n': 1,
                    's':-1}
  let eastWest = {'e': 1,
                  'w': -1}
  let homeBase = [0,0]

  for(let i = 0; i<walk.length; i++){
    if(walk[i] == 'n' || walk[i] == 's'){
      homeBase[0] += northSouth[walk[i]]
    } else{
      homeBase[1] += eastWest[walk[i]]
    }
  }
  return homeBase[0] == 0 && homeBase[1]==0 && walk.length == 10? true: false
}

// 7kyu: Beginner Series #3 Sum of Numbers
function getSum( a,b ){
  let low = a<b?a:b, 
      high = a<b?b:a,
      range = Math.abs(b-a)+1,
      ans = 0
  
  for(let i = 0; i<range;i++){
    ans += low+i    
  }
  return ans
}

// 7kyu: Square Every Digit
function squareDigits(num){
  return Number(String(num).split('').map(n=>n*n).join(''));
}

// 7kyu: List Filtering
function filter_list(l) {
  return l.filter(x=>typeof x == "number")
}

// 7kyu: Get the Middle Character
function getMiddle(s){
  return s.length%2==0? s[s.length/2-1]+s[s.length/2]:s[Math.floor(s.length/2)]
}

// 7kyu: Reverse words
function reverseWords(str) {
  return str.split(' ').map(w=>w.split('').reverse().join('')).join(' ')
}

// 8kyu: Convert a Boolean to a String
function booleanToString(b){
  return b == true? 'true': 'false'
}

// 8kyu: MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase()
}

// 8kyu: Reversed Strings
function solution(str){
  return str.split('').reverse().join('')
}
