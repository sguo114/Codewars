// 16 kata completed

// 6kyu: Two to One
function longest(s1, s2) {
  let s = (s1+s2).split('').sort()
  let freq={}
  return s.filter(num=>{
    freq[num]=freq[num]+1||1;
    return freq[num] <= 1
  }).join('')
}

// 6kyu: Delete Occurrences of an elementif it occurs more than n times
function deleteNth(arr,n){
  let freq = {}
  for(let i = 0;i<arr.length;i++){
    if(freq[arr[i]]){
      freq[arr[i]] += 1
    } else{
      freq[arr[i]] = 1
    }
  }
  for(let i = 0; i<arr.length;i++){
    if(freq[arr[i]]>n){
      arr.splice(arr.lastIndexOf(arr[i]),1)
      freq[arr[i]] -=1
      i--
    }
  }
  return arr
}

// second solution
function deleteNth(arr,n){
  let freq = {}
  return arr.filter(function(num){
    (freq[num] = freq[num]+1||1);
    return freq[num]<=n
  })
}

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

// 6kyu: Break camelCase
function solution(string) {
  let arr = string.split('')
  for(let i = 1;i<arr.length; i++){
    if(arr[i] == arr[i].toUpperCase()){
      arr.splice(i,0,' ')
      i++
    }
  }
  return arr.join('')
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

// 7kyu: Money, Money, Money
function calculateYears(p, interest, tax, desired) {
  let year=0
  while(p<desired){
    p = p+p*interest*(1-tax)
    year+=1
  }
  return year
}

// 7kyu: Count the digit
function nbDig(n, d) {
  let squares = []
  for(let i=0; i<=n; i++){
    squares.push(Math.pow(i,2))
  }
  return squares.join('').split('').filter(x=>x==d).length
}

// 7kyu: Number of People in the bus
var number = function(busStops){
  let people = 0
  busStops.forEach(stop=>people += stop[0]-stop[1])
  return people
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

// 8kyu: L1: Set Alarm
function setAlarm(employed, vacation){
  return vacation == true? false:employed == true? true: false
}

// 8kyu: Return Negative
function makeNegative(num) {
  return num>0? -num:num
}

// 8kyu: Grasshopper- Summation
var summation = function (num) {
  let ans = []
  for(let i = 0; i< num;i++){
    ans.push(num-i)
  }
  return ans.reduce((a,b)=>a+b)
}

// 8kyu: Reduce but grow
function grow(x){
  return x.reduce((a,b)=>a*b)
}

// 8kyu: Welcome!
function greet(language) {
	let welcome = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'   
  }
  return welcome[language]? welcome[language]: welcome['english']
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
