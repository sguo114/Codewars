// 8kata completed

// 6kyu: Duplicate Encoder 
function duplicateEncode(word){
    // ...
  return word
  .toLowerCase()
  .split('')
  .map((element, index, array)=> array.indexOf(element) == array.lastIndexOf(element)? '(':')')
  .join('')
  }
  
  
//   console.log(word)
//   let freq = {}
//   for (let i =0; i<word.length; i++){
//     let character = word.charAt(i).toLowerCase()
//     if(freq[character]){
//       freq[character]+=1
//     } else{freq[character]=1}
//   }
//   console.log(freq)
//   for (let count in freq) {
//     console.log('mm',count)
//     let regex;
//     let hj = '\\' + count
//     if(count === '('||count ===')'){
//       regex = new RegExp(hj,"g")
//     } else{ regex = new RegExp(count,"g")}
                        
//     if(freq[count]>=2){  
//       word = word.toLowerCase().replace(regex,')')
//       console.log(word)
//     } else{ 
//       word = word.toLowerCase().replace(count, '(')
//     }
//   }
//   console.log(word)
//   return word
//}

// 8kyu: Enumerable Magic #20- Cascading Subsets
function eachCons(array, n) {
  let x = array.length;
  let z = []
  for(let i = 0; i<=x-n; i++){
    let y = []
    for(let j =i; j<n+i; j++){
      y.push(array[j])
    }
    z.push(y)
  }
  return z;
}

// 8kyu: Lario and Muigi Pipe Problem:
function pipeFix(numbers){
  let start = numbers[0]
  let end = numbers[numbers.length-1]
  let ans = []
  for(let i =start; i<=end; i++){
    ans.push(i)
  }
  return ans
}

// 8kyu: Freudian translator
function toFreud(string) {
let result = ""
let length = string.split(" ").length 
  for(let i = 0; i<length; i++) {
    result += string ==""? "" : i<length-1?'sex ':'sex'
  }
  return result
}

// 8kyu: Beginner- Lost Without a Map
function maps(x){
  return x.map(value=>value*2)
}

// 8kyu: Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg*fuelLeft 
};

// 8kyu: Aspect Ratio Cropping-Part 1
function aspectRatio(x,y){
  return [Math.ceil(y*16/9),y] 
}

// 8kyu: Rock Paper Scissors!
const rps = (p1, p2) => {
  if(p1 === 'scissors' && p2 ==='paper' || p1 === 'paper'&& p2==='rock'||p1 ==='rock'&& p2==='scissors'){
    return 'Player 1 won!'
  } else if(p1 === p2){
    return 'Draw!'
  } else{return 'Player 2 won!'}
};
