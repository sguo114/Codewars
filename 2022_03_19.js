// 15 kata completed

// 7kyu: Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// 8kyu: Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}

// 8kyu: Opposites Attract
function lovefunc(flower1, flower2){
  if (flower1%2 ===0 && flower2%2 != 0 ||flower1%2 !=0 && flower2%2 ===0){
    return true
  } else {return false
  }
}

// 8kyu: Even or Odd
function even_or_odd(number) {
  if(number%2 ===0){
    return 'Even'
  } else {return 'Odd'}
}

// 8kyu: Gravity Flip
const flip=(d, a)=>{
    let gravity;
    if(d === 'L'){
        gravity = a.sort((low,high)=>high-low)
    } else if (d ==='R'){
        gravity = a.sort((low,high)=>low - high)
    }
    return gravity
  }

// 8kyu: Coefficients of the Quadratic Equation
function quadratic(x1, x2){
  let answer = [1, , ]
  answer[1] = (-x1-x2);
  answer[2] = (x1*x2);
  return answer
}

// 8kyu: Quarter of the Year
const quarterOf = (month) => {
  // Your code here
  if (month/12<=.25){
    return 1
  } else if (month/12<=.5){
    return 2
  } else if (month/12<=.75){
    return 3
  } else{ return 4}
}

// 8kyu: A wold in sheep's clothing
function warnTheSheep(queue) {
  if(queue[queue.length-1] === 'wolf'){
      return 'Pls go away and stop eating my sheep'
    } else {
      for(let i = 0; i<queue.length; i++){
        if(queue[i]==='wolf'){
          return `Oi! Sheep number ${queue.length-i-1}! You are about to be eaten by a wolf!`
        }
      }
    }
}

// 6kyu: Counting Duplicates
function duplicateCount(text){
  let freq = {}
  let answer=0
  for (let i =0; i<text.length; i++){
    let character = text.charAt(i).toLowerCase()
    if(freq[character]){
      freq[character]+=1
    } else{freq[character]=1}
  }
  for (let count in freq){
    if(freq[count]>=2){
      answer += 1
    }
  }
  return answer
}

// 8kyu: Semi-Optional
function wrap(word) {
  value = {value: word}
  return value 
}

// 8kyu: Closest Elavtor
function elevator(left, right, call){
  if( Math.abs(left-call) >= Math.abs(right-call)){
    return "right"
  } else{
    return "left"
  }
}
// 8kyu: Total amount of points
function points(games) {
  let points=0;
  for(let i =0; i<games.length;i++){
    let x = parseInt(games[i].charAt(0))
    let y =parseInt(games[i].charAt(2))
    if (x>y){
      points+=3
    } else if (x==y){
      points+=1
    }
  }
  return points
}

// 8kyu: USD=> CNY
function usdcny(usd) {
  let cny = usd*6.75
  cny = cny.toFixed(2)
  return `${cny} Chinese Yuan`
}

// 8kyu: Pillars
function pillars(num_pill, dist, width) {
  if (num_pill>=2){
    return (num_pill-2)*width + (num_pill-1)*dist*100
  } else if (num_pill=1){
    return 0
  } 
}

// 8kyu: Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let twice = sonYearsOld*2;
  let diff = Math.abs(twice-dadYearsOld)
  return diff
}
