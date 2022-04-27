// 9 kata completed

// 5kyu: A Man and his Umbrellas
function minUmbrellas(weather) {
  let rain = ['rainy', 'thunderstorms']
  let [home,work] = [0,0]
  for(let i = 0; i<weather.length; i++){
    rain.includes(weather[i])? 
      ((i%2 ==0 && home==0) ? work += 1 : 
      (i%2 ==0 && home>0) ? (work+=1,home-=1):
      (i%2 !=0 && work==0) ? home+=1: (home+=1, work-=1)): home
  }
  return home+work
}

// 5kyu: String Incrementer
function incrementString (strng) {
  let num = []
  let str = strng.split('')
  while(!isNaN(str[str.length-1])){
    num.push(str[str.length-1])
    str.pop()
  }
  num.length>0? num = String(Number(num.reverse().join(''))+1).padStart(num.length,'0'): num = 1
  return str.join('')+num
}

// 6kyu: Mexican Wave
function wave(str){
  let ans = []
  if(str.length>1){
    ans = str[0] !== ' '?[str[0].toUpperCase()+str.slice(1)]:[]
    for(let i = 1; i<str.length;i++){
      if(str[i]!= ' '){
        ans.push(str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1))
      }
    }
  }
  return ans
}

// 6kyu: Find the total white and black areas in a weird chessboard
function whiteBlackAreas(cols, rows) {
  let sumOfWhites = 0, sumOfBlacks = 0, N = cols.length
  let evenColLength = 0, oddColLength = 0, evenRowLength = 0, oddRowLength = 0
  for(let i = 0; i<N;i++){
    i%2 == 0? (evenColLength += cols[i], evenRowLength += rows[i]):(oddColLength += cols[i], oddRowLength += rows[i])
  }
  sumOfWhites = evenColLength*evenRowLength + oddColLength*oddRowLength
  sumOfBlacks = evenColLength*oddRowLength + oddColLength*evenRowLength
  return [sumOfWhites, sumOfBlacks]
}

// 7kyu: Testing 1-2-3
var number=function(array){
  return array.map((x,i)=>`${i+1}: ${x}`)
}

// 7kyu: Find the middle element
function gimme (triplet) {
  return triplet.indexOf(triplet.filter(x=> x!=Math.max(...triplet)&&x!=Math.min(...triplet))[0])
}

// 7kyu: Sum of a sequence
const sequenceSum = (begin, end, step) => {
  let ans = 0
  for(let i = begin; i<=end; i=i+step){
    ans += i
  }
  return ans
};

// 8kyu: Grasshopper- Gradebook
function getGrade (s1, s2, s3) {
  let avg = (s1+s2+s3)/3 
  return avg>=90? 'A': avg>=80? 'B': avg>=70? 'C': avg>=60? 'D':'F'
}

// 8kyu: You only need one- beginner
function check(a, x) {
  return a.includes(x)
}
