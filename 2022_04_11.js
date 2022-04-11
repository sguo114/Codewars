// 13 kata completed

// 8kyu: Training on Stringy Strings
function stringy(size) {
  let arr = Array(size).fill(0)
  for(let i = 0; i<arr.length; i++){
    i%2 == 0? arr[i] = '1': arr[i] = '0'
  }
  return arr.join('')
}

// 7kyu: Binary Representation of an Integer
function showBits (n) {
  let ans = Array(32).fill(0)

  if(n>=0){
    for(let i = 0; i<32; i++){
      if(2**(31-i)>n){
        ans[i] = 0
      } else{
        ans[i] = 1
        n = n - 2**(31-i)
      }
    }
  } else{
    n = Math.abs(n) - 1
    for(let i = 0; i<32; i++){
      if(2**(31-i)>n){
        ans[i] = 1
      } else{
        ans[i] = 0
        n = n - 2**(31-i)
      }
    }
  }
  return ans
}

// 8kyu: Decibel Scale
function dBScale(intensity) {
  return ( 10 * Math.log(intensity / Math.pow(10,-12) ) / Math.log(10) );
}

// 8kyu: Count Odd Numbers
function oddCount(n){
  return Math.floor(n/2);
}

// 8kyu: Is the date today?
function isToday(date) {
  console.log(new Date().toDateString(), date.toDateString())
  return date.toDateString() == new Date().toDateString()
}

//8kyu Double Char
function doubleChar(str) {
  return str.split('').map(x=>x+x).join('')
}

// 8kyu: Find Maximum and Minimum
var min = function(list){
    list.sort((a,b)=>a-b)
    return list[0];
}

var max = function(list){
    list.sort((a,b)=>b-a)
    return list[0];
}

// 8kyu: Returning Strings
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// 8kyu: What is between?
function between(a, b) {
  let ans = []
  for(let i = 0; i<=(b-a); i++){
    ans.push(a+i)
  }
  return ans
}

// 8kyu: Reverse List Order
function reverseList(list) {
  return list.reverse()
}

// 8kyu: Training on Enumerable Magic #25- Take the first N Elements
function take(arr, n) {
  return arr.slice(0,n)
}

// 8kyu: Sum of Positive
function positiveSum(arr) {
  return arr.reduce((cumm,next)=>next>0?next+cumm:cumm,0)
}

// 8kyu: Is it even?
function testEven(n) {
    return (n % 2) == 0;
}

