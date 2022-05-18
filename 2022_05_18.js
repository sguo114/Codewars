// kata completed

// 7kyu: Anagram Detection
var isAnagram = function(test, original) {
  let t =test.toLowerCase().split("").sort(),
      o =original.toLowerCase().split("").sort()
 
  if(t.length != o.length) return false
  for(let i = 0; i<t.length; i++){
    if(t[i] !== o[i]) return false
  }
  return true
};

// 7kyu: Make a dunction that does arithmetic!
function arithmetic(a, b, operator){
  let op = {add: function(a,b){return a+b},
           subtract: function(a,b){return a-b},
           multiply: function(a,b){return a*b},
           divide: function(a,b){return a/b}}
  return op[operator](a,b)
}

// 8kyu: Convert to Binary
function toBinary(n){
  return Number(n.toString(2));
}

// 8kyu: N-th Power
function index(array, n){
  return array.length > n ? Math.pow(array[n],n) : -1 
}
