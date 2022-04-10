// 5 kata completed

//5 kyu: Greed is Good
function score( dice ) {
  // Fill me in!
  let freq = {}
  let ans = 0
  for(let i =0; i<dice.length; i++){
    if(freq[dice[i]]){
      freq[dice[i]] += 1
    } else{freq[dice[i]]=1}
  }
  for(let j = 1; j<=6;j++){
    if(freq[j]>=3 && j === 1){
      ans += 1000
      freq[j] -= 3
    } else if(freq[j]>=3){
      ans += j*100
      freq[j] -=3
    }
  }
  for(let j = 1; j<=6;j++){
    if(freq[j]<=2 && j === 1){
      ans += freq[j]*100
    } else if(freq[j]<=2&& j ===5){
      ans += freq[j]*50
    }
  }
    return ans
}

// 8kyu: Sentence Smash
function smash (words) {
   return words.join(" ")
};

// 6kyu: Highest Rank Number in Array (2 solutions)
function highestRank(arr){
//Your Code logic should written here
  return arr.sort((a,b)=> arr.filter(i=>i===b).length-arr.filter(i=>i===a).length)[0]
}

//solution 2
function highestRank(arr){
  let freq = {}
  let newArray = []
  
  //find the frequency of each
  for(let i = 0; i<arr.length; i++){
    if(freq[arr[i]]){
      freq[arr[i]] += 1
    } else{freq[arr[i]] = 1}
  }
  
  //change freq to array of objects
  let separateObj = obj=>{
    Object.keys(obj).forEach(key => {newArray.push( {[key]:obj[key]} )} )
    return newArray
  } 
  let x = separateObj(freq)
  
  //find highest freq and associated key
  let highestFreq = Object.values(freq).reduce((max,next)=> max>next?max:next)
  let highestKey = x.filter(key => Object.values(key)== highestFreq)
  
  //array of all keys with highest frequency
  let finArr =[]
  for(let i = 0; i< highestKey.length; i++){
    finArr.push(Number(Object.keys(highestKey[i])))
  }
  return Math.max(...finArr)
}

// 8kyu: Find Multiples of a Number
function findMultiples(integer, limit) {
  let ans = []
  for(let i = 1; i<=Math.floor(limit/integer);i++){
    ans.push(integer*i)
  }
  return ans
}

// 8kyu: Removing Elements
function removeEveryOther(arr){
  let n =arr.length/2
  for(let i = 1; i<=n; i++){
      arr.splice(i,1)
  }
  return arr
}


