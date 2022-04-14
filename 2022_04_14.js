// 8 kata completed

// 7kyu: Filter unused digits (2 solutions)
function unusedDigits() {
  let nums = [1,2,3,4,5,6,7,8,9,0]
  let ans = []
  let str = Object.values(arguments).join('')
  
  for(let i = 0; i<nums.length; i++){
    str.includes(nums[i])?ans=ans:ans.push(nums[i]) 
  }
  return String(ans.sort((a,b)=>a-b).join(''))
}

//second solution
function unusedDigits(...arr) {
  return '0123456789'.replace(new RegExp(`[${arr.join('')}]`,'g'),'')
}

// 8kyu: Pirates!! Are the cannons ready??
const cannonsReady = (gunners) => {
  return Object.values(gunners).join('').includes('nay')?'Shiver me timbers!':'Fire!'
}


// 8kyu: A Strange Trip to the Market
function isLockNessMonster(s) {
  return s.includes("tree fiddy") || s.includes("3.50");
}

// 8kyu:Convert a Number to a String!
function numberToString(num) {
  return String(num)
}

// 8kyu: altERnaTIngcAsE
String.prototype.toAlternatingCase = function () {
  return this.split('').map(x=> x==x.toLowerCase()? x=x.toUpperCase(): x=x.toLowerCase()).join('')
}

// 8kyu: String repeat (2 solutions)
function repeatStr (n, s) {
  let ans = ''
  for(let i=0; i<n; i++){
    ans+=s
  }
  return ans;
}
// solution 2
function repeatStr(n,s){ return s.repeat(n)}

// 8kyu: Find the Remainder
function remainder(n, m){
  return n>m? n%m: m%n
}

// 8kyu: Sum of Multiples
function sumMul(n,m){
  let count = Math.floor(m/n)
  let ans = 0
  for(let i = 1; i<=count; i++){
    ans = ans + n*i
  }
  return ans ==0? 'INVALID':ans
}
