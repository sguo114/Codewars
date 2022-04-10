// 4 kata complete

// 6kyu: The Supermarket Queue (2 solutions)
function queueTime(customers, n) {
  let tills = Array(n).fill(0)
  for(let customer of customers){
    let open = tills.indexOf(Math.min(...tills))
    tills[open] += customer
  }
  return Math.max(...tills)
}

// solution 2
function queueTime(customers, n) {
  console.log(customers, n)
  if(customers.length<1){
    return 0
  } else if(customers.length ==1){
    return customers[0]
  }
  
  let tills = []
  
  for(let i = 0; i<n; i++){
    tills.push(customers[0])
    customers.shift()
    if(tills[i] == undefined){
      tills.pop()
    }
  }
  let c = customers.length
  for(let j = 0; j<c; j++){
    let min = Math.min(...tills)
    tills[tills.indexOf(min)] += customers[j]
    }
  
  return Math.max(...tills)
}

// 8kyu: String Cleaning
function stringClean(s){
  let arr = s.split('')
  let ans = ''
  arr.forEach(l=> l == ' '? ans+=' ': l/1>=0 ? ans+='': ans+=l)
  return ans
}

// 7kyu: Jaden Casing Strings
String.prototype.toJadenCase = function () {
  console.log(this)
    return this.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
};

// 6kyu: Statistics for an Athletic Association
function stat(strg) {
  if(strg.length<1){return ''}
  
  let runner = strg.split(',')
  let time = []
  for(let i = 0; i<runner.length;i++){
    time[i] = parseInt(runner[i].trim().split('|')[0])*3600 + parseInt(runner[i].trim().split('|')[1])*60 + parseInt(runner[i].trim().split('|')[2])
  }
  time.sort((a,b)=>a-b)
  
  let t = time.length
  let range = time[time.length-1]-time[0]
  let mean = time.reduce((a,b)=> Number(a)+Number(b))/time.length
  let median
  if(time.length%2 ==0){
    median = (time[t/2] + time[t/2 - 1]) / 2
  } else{median = time[Math.ceil(t/2) -1]}

 function convert(x){
   let hour = Math.floor(x/3600).toString().padStart(2,'0')
   let min = Math.floor(x%3600/60).toString().padStart(2,'0')
   let sec = Math.floor(x%3600%60).toString().padStart(2, '0')
   
   return `${hour}|${min}|${sec}`
   }
  return `Range: ${convert(range)} Average: ${convert(mean)} Median: ${convert(median)}`
}
