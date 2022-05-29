// kata completed

// 6kyu: Fibonacci Rabbits
function fib_rabbits(n, b) {
  let immature = 1, adult = 0
  for(let i = 0; i<n ; i++){
    let temp = immature
    immature = adult*b
    adult = temp + adult
  }
  return adult
}

// 6kyu: Encrypt this!
var encryptThis = function(text) {
  let arr = text.split(' ').map(el=>el.split(''))
  
  for(let i = 0; i<arr.length; i++){
    let temp = arr[i][1]
    arr[i][1] = arr[i][arr[i].length-1]
    arr[i][arr[i].length-1] = temp
    
    arr[i][0] = arr[i][0].charCodeAt()
  }
  
  return arr.map(el=>el.join('')).join(' ')
}

// 8kyu: Grasshopper: Debug sayHello
function sayHello(name) {
  return `Hello, ${name}`
}

// 8kyu: Training JS #4: Basic Data Types-- Arrays
function getLength(arr){
  return arr.length
}
function getFirst(arr){
  return arr[0]
}
function getLast(arr){
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  arr.push(el)
  return arr
}
function popElement(arr){
  arr.pop()
  return arr
}

// 8kyu: Sum arrays
function sum (numbers) {  
    return numbers.reduce((a,b)=>a+b, 0)
};

// 8kyu: How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
  return name == "Zach" ? 18 : 0
}
