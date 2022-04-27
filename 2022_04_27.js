// 4 kata completed

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

// 8kyu: You only need one- beginner
function check(a, x) {
  return a.includes(x)
}
