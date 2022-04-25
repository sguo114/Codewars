// 8 kata completed

// 5kyu: Maximum Subarray Sum
var maxSequence = function(arr){
  let ans = {}, sum = 0, neg = 0
  for(let i = 0; i<arr.length;i++){
    sum = arr[i]
    ans[[i]] = sum
    for(let j = i+1; j<arr.length; j++){
      sum += arr[j]
      ans[[i,j]] = sum
    }
    arr[i]<0? neg +=1:neg
  }
  return neg==arr.length?0:Math.max(...Object.values(ans))
}

// 6kyu: Simple Encryption #1: Alternating Split
function encrypt(text, n) {
  if(text == ''||text == null){return text}
  let concat = text.split('')
  for(let j = 0;j<n;j++){
    let odd = [], even = []
    concat.forEach((e,i)=>i%2==0?even.push(e):odd.push(e))
    concat = odd.concat(even)
  }
  return concat.join('')
}

function decrypt(encryptedText, n) {
  if(encryptedText == ''||encryptedText==null||n<0){return encryptedText}
  let concat, half = Math.floor(encryptedText.length/2), ans=[]
    concat = encryptedText.split('') 
    for(let j = 0;j<n;j++){
      let evens = concat.slice(half)
      let odds = concat.slice(0,half)

      for(let i = 0; i<evens.length;i++){
        ans.push(evens[i])
        odds[i]? ans.push(odds[i]): ans
      }
      concat = ans
      ans = []
    }   
  return concat.join('')
}

// 6 kyu: Count characters in your string
function count (string) {  
  let freq = {}
  for(let i = 0; i<string.length; i++){
    if(freq[string[i]]){
      freq[string[i]]++
    } else{freq[string[i]] = 1}
  }
   return freq;
}

// 6kyu: Two Sum
function twoSum(numbers, target) {
  let ans = []
  for(let i = 0;i<numbers.length; i++){
    for(let j = 0; j<numbers.length-1;j++)
      if(numbers[i]+numbers[j]==target){
        ans = [i,j]
        break;
      }
  }
  return ans
}

// 6 kyu: Count the Smiley Faces
function countSmileys(arr) {
  let smileys = [':)',':-)',':~)',':D',':-D',':~D',';)',';-)',';~)',';D',';-D',';~D']
  return arr.filter(smiley => smileys.includes(smiley)).length
}

// 2nd solutions
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

// 7kyu: Find the stray number
function stray(numbers) {
  let arr = numbers.filter(e=>e!=numbers[0])
  let diff = numbers.filter(e=>e==numbers[0])
  return arr.length>1?diff[0]:arr[0];
}

// 8kyu: Beginner Series #1 School Paperwork
function paperwork(n, m) {
  return n<0||m<0?0:n*m
}

// 8kyu: Simple multiplication
function simpleMultiplication(number) {
    return number%2==0? number*8:number*9
}
