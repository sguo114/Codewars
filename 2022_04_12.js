// 8 kata completed

// 8kyu: To square(root) or not to square(root)
function squareOrSquareRoot(array) {
  return array.map(x => Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : Math.pow(x,2) )
}

// 8kyu: Check Same Case
function sameCase(a, b){
  return (a.toLowerCase() == a.toUpperCase() || b.toLowerCase() == b.toUpperCase())? -1:
         ((a.toUpperCase() === a && b.toUpperCase() === b) || (a.toLowerCase() ===a && b.toLowerCase() == b))? 1:
         ((a.toUpperCase() === a && b.toLowerCase() === b) || (a.toLowerCase() ===a && b.toUpperCase() == b))? 0: -1
 }

// 7kyu: Adding Arrays
function arrAdder(arr) {
  let ans = ''
  console.log(arr)
  for(let i = 0; i<arr[0].length; i++){
    for(let j = 0; j<arr.length; j++){
      arr[j][i] != ''? ans += arr[j][i]: ans+= ''
    }
    i<arr[0].length-1? ans += ' ': ans = ans
  }
  return ans
}

// 7kyu: Maximum Length Difference
function mxdiflg(a1, a2) {
    let sorta1 = a1.map(x=> x.length).sort((a,b)=> a-b)
    let sorta2 = a2.map(x=> x.length).sort((a,b)=> a-b)
    
    return a1.length <1 || a2.length< 1? -1: 
            Math.max(...[Math.max(...sorta1)-Math.min(...sorta2), Math.max(...sorta2)-Math.min(...sorta1)])
}

// 7kyu: 'x' marks the spot
const xMarksTheSpot = (input) => {
  let x = []
  let y = []
  console.log(input)
  if(input.length>0){
    for(let i = 0; i< input[0].length; i++){
      for(let j = 0; j< input.length; j++){
        input[j][i] == 'x'? x.push(j) : x = x
        input[j][i] == 'x'? y.push(i) : y = y
      }
    }
  }
  console.log(x)
  return x.length!=1? []: [x[0],y[0]]
}

// 6kyu: Pi Approximation
function iterPi(epsilon) {
  let sign
  let i = 1
  let diff = 100
  let piover4 = 0
  let count = 1
  
  while(diff > epsilon){
    count%2 != 0? sign =1: sign = -1
    piover4 += sign/(i)
    i += 2
    count += 1
    diff = Math.abs(Math.PI - piover4*4)
  }
  return [count-1, Number((piover4*4).toFixed(10))]
}

// 7kyu: ATM
function solve(n) {
  let count = 0
  while(n>0){
    n>=500? n = n-500: n>=200? n = n-200: n>=100? n = n-100: n>=50? n = n-50: n>=20? n= n-20: n>=10? n = n-10: n = -1
    count+= 1
  }
  return n == 0? count: -1
}

// 7kyu Thinkful- List Drills: Longest Word
function longest(words) {
  return Math.max(...words.map(word=> word.length)); 
}
