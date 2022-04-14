// 3 kata completed

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
