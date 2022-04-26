// 7 kata completed

// 6kyu: Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
function sumDigPow(a, b) {
  let ans = [], sum = 0
  for(let i = a; i<=b;i++){
    let arr = String(i).split('')
    for(let j = 0; j<arr.length;j++){
      sum += Math.pow(arr[j],j+1)
    }
    sum == i? ans.push(i):ans
    sum = 0
  }
  return ans
}

// 6kyu: Playing with digits
function digPow(n, p){
  let arr = String(n).split(''), sum=0
  for(let i = 0; i<arr.length;i++){
    sum += Math.pow(arr[i],p)
    p++
  }
  return sum%n == 0? sum/n: -1
}

// 7kyu: Count the digit
function nbDig(n, d) {
  let squares = []
  for(let i=0; i<=n; i++){
    squares.push(Math.pow(i,2))
  }
  return squares.join('').split('').filter(x=>x==d).length
}

// 8kyu: Grasshopper- Personalized Message
function greet (name, owner) {
  let x
  switch(name){
      case owner: 
        x = 'Hello boss';
        break;
      
      default:
        x = 'Hello guest';
  }
  return x
}

// 8kyu: Sum without highest and lowest number
function sumArray(array) {
  if(array == null || array.length<=1){
    return 0
  } else{
    array.sort((a,b)=>a-b).shift()
    array.pop()
    return array.reduce((a,b)=>a+b,0)
  }
}

// 8kyu: Return Negative
function makeNegative(num) {
  return num>0? -num:num
}

// 8kyu: Switch it Up
function switchItUp(number){
  let x 
  switch(number){
      case 1:
        x = 'One'
        break;
      case 2:
        x = 'Two'
        break;
      case 3:
        x = 'Three'
        break;
      case 4:
        x = 'Four'
        break;
      case 5:
        x = 'Five'
        break;
      case 6:
        x = 'Six'
        break;
      case 7:
        x = 'Seven'
        break;
      case 8: 
        x = 'Eight'
        break;
      case 9:
        x = 'Nine'
        break;
      case 0:
        x = 'Zero'
  }
  return x
}
