// 7 kata completed

// 5kyu: Integers: Recreation One
function listSquared(m, n) {
  let arrDivisors = [],k = 0 
  for(let i = m; i<=n; i++){
    arrDivisors.push([])
    for(let j = 1; j<=i; j++){
      i%j==0?arrDivisors[k].push(j):arrDivisors[k]
    }
    k++
  }
  
  let sumOfSquares = arrDivisors.map(arr => [arr[arr.length-1] , arr.reduce((a,b)=>a+Math.pow(b,2),0)])
  let arrOfSquares = sumOfSquares.filter(el=>Math.sqrt(el[1])%1==0)
  
  return arrOfSquares
}

// 5kyu: Second Variation on Caesar Cipher
let abcs = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function encodeStr(s, shift) {
  let sArr = s.split(''), 
      encode = [s[0].toLowerCase(), abcs[abcs.indexOf(s[0])+shift].toLowerCase()]
  
  for(let i = 0; i<sArr.length;i++){
    let abcIndex = abcs.indexOf(sArr[i])
    encode.push((abcIndex >= 0) ? abcs[abcIndex + shift] : sArr[i])
  }
  
  let runArrLen = Math.ceil(encode.length/5),
      runners = encode.length%4 ==0 && encode.length<17? 4: 5, ans = []
  
  for(let i = 0; i< runners;i++){
    ans.push(encode.splice(0,runArrLen).join(''))
  }
  return ans
}

function decode(arr) {
  let encoded = arr.join(''),
      shift = abcs.indexOf(encoded[1])-abcs.indexOf(encoded[0])>0?
              abcs.indexOf(encoded[1])-abcs.indexOf(encoded[0]):
              26+abcs.indexOf(encoded[1])-abcs.indexOf(encoded[0]), 
      decode = ''
  for(let i = 2; i<encoded.length; i++){
    let abcIndex = abcs.lastIndexOf(encoded[i])
    decode += (abcIndex>=0) ? abcs[abcIndex - shift]: encoded[i]
  }
  return decode
}

// 6kyu: Tortoise racing
function race(v1, v2, g) {
  let time = g/(v2-v1)
  let h = time>=1?Math.floor(time):0
  let m = Math.floor((time*60)%60)
  let s = Math.floor((time*3600)%60)
  return v1>=v2? null: [h,m,s]
}

// 7kyu: Isograms
function isIsogram(str){
  let freq = {}, count = {}
  let arr = str.toLowerCase().split('')
  arr.forEach(l=>freq[l]?freq[l]+=1:freq[l]=1)
  Object.values(freq).forEach(c=>count[c]?count[c]+=1:count[c]=1)
  
  return Object.values(count).length>1?false:true
 }

// 8kyu: Will there be enough space?
function enough(cap, on, wait) {
  return wait-cap+on>0?wait-cap+on:0
}

// 8kyu: Third angle of a triangle
function otherAngle(a, b) {
  return 180-a-b;
}

// 8kyu: Convert a string to a number
var stringToNumber = function(str){
  return Number(str);
}
