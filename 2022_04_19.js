// 8 kata completed

// 6kyu: Tribonacci Sequence
function tribonacci(signature,n){
  for(let i = 0; i<n-3; i++){
    signature.push(signature[i]+ signature[i+1]+ signature[i+2])
  }
  return n==0? []:n<3?signature.slice(0,n):signature
}

// 6kyu: Equal Sides Of An Array
function findEvenIndex(arr){
  let left, right, index=0, indArr = [] 
  for(let i = 0; i<arr.length; i++){ 
    i == 0? left = 0: left = arr.slice(0,i).reduce((a,b)=>a+b,0)
    right = arr.slice(i+1).reduce((a,b)=>a+b,0)
    
    left == right? indArr.push(index): indArr = indArr
    index++
  }
  return indArr.length<1? -1:indArr[0]
}

// 6kyu: Linked Lists- Length and Count
function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let temp = head, count = 0
  while(temp!= null){
    count++
    temp = temp.next
  }
  return count
}

function count(head, data) {
  let temp = head, count = 0
  while(temp!= null){
    temp.data == data? count++: count = count
    temp = temp.next
  }
  return count
}

// 6kyu: N-th Fibonacci
function nthFibo(n) {
  let fib = [0,1]
  if(n<1){
    return 0 
  } else if(n>1){
    for(let i =2; i<n; i++){
      fib.push(fib[i-1]+fib[i-2])
    }
  }
  return fib[n-1]
}

// 7kyu: Regex validate PIN code
function validatePIN (pin) {
  return !(/[^0-9]/g).test(pin) && (pin.length==4||pin.length ==6)
}

// 7kyu: Odd or Even
function oddOrEven(array) {
   return array.reduce((a,b)=>a+b,0)%2 == 0? 'even':'odd'
}

// 8kyu: Remove String Spaces
function noSpace(x){
  return x.split('').filter(c=>c!=' ').join('')
}

// 8kyu" Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
