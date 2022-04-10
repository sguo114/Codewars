//3 kata completed

// 8kyu: Easy Logs
function logs(x , a, b){
// log_b(a) = log_x(a)/log_x(b)  
  let logxa = Math.log(a)/Math.log(x)
  let logxb = Math.log(b)/Math.log(x)
  return logxa+logxb
}

// 8kyu: Draw Stairs
function drawStairs(n) {
  let stairs = ''
  for (let i = 0; i<n; i++){
    stairs += i ===0? 'I': '\n' +' '.repeat(i) + 'I'
  }
  return stairs
}

// 8kyu: If you can't sleep, just count sheep
var countSheep = function (num){
  //your code here
  let sheep = ''
  for(let i = 1; i<= num; i++){
    sheep += i + ' sheep...'
  }
  return sheep
}
