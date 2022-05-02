// 3 kata completed

// 6kyu: Feynman's Square question
function countSquares(n){
  let ans = 0
  for(let i = 1; i<=n;i++){
    ans+= Math.pow(i,2)
  }
  return ans
}

// 8kyu: Beginner Series #2 Clock
function past(h, m, s){
  return h*3600000 + m*60000 + s*1000
}

// 8kyu: Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  return Math.floor(s*100000/3600)
}
