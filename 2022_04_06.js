// 7 kata completed

// 6kyu: Replace With Alphabet Position
function alphabetPosition(text) {
  console.log(text)
  text = text.toLowerCase()
  let abcs = "abcdefghijklmnopqrstuvwxyz"
  let ans = []
  for(let i = 0; i<text.length; i++){
    for(let j = 0; j<=abcs.length;j++){
      if(text[i]==abcs[j]){
        ans.push(abcs.indexOf(abcs[j])+1)
      }
    }
  }
  return ans.join(' ');
}

// 8kyu: Is it a palindrome?
function isPalindrome(x) {
  return x.toLowerCase() == x.split('').reverse().join('').toLowerCase()
}

// 7kyu: String ends with?
function solution(str, ending){
  return str.slice(str.length-ending.length,str.length) == ending
}

// 7kyu: Insert Dashes
function insertDash(num) {
  let array = String(num).split('')
  let ans = []
  for(let i =0; i<array.length; i++){
    ans.push(array[i])
    if(i == array.length-1){
      ans.push(array[i+1])
    } else if(array[i]%2 !=0 && array[i+1]%2 !=0){
      ans.push('-')
    }
  }
  return ans.join('')
}

// 8kyu: Difference of Volumes fo Cuboids
function findDifference(a, b) {
  return Math.abs(a.reduce((a,b)=>a*b)-b.reduce((a,b)=>a*b))
}

// 8kyu: Filter out the geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird=> geese.indexOf(bird)<0)
};

// 6kyu: Build a pile of Cubes
function findNb(m) {
  let i =0;  
  while(m>0){
    i++
    m = m - Math.pow(i,3)
  }
  if(m == 0){
    return i
  } else {return(-1)}
}
