//4 kata completed
// 8kyu: Points of Reflection
function symmetricPoint(p, q) {
  let m = (q[1]-q[0])/(p[1]-p[0])
  let b = p[1]-m*p[0]
  
    let ppx = q[0]- (p[0]-q[0])
    let ppy = q[1]- (p[1]-q[1])
    
    return [ppx, ppy]
}

// 7kyu: Filter Long Words (2 solutions)
function filterLongWords(sentence, n) {
  let splitSentence = sentence.split(" ")
  let newArray = []
  for (let i = 0; i< splitSentence.length; i++){
    if(splitSentence[i].length > n){
      let x = splitSentence[i]
      newArray.push(x)
    }
  }
  return newArray
}
// solution 2
function filterLongWords(sentence, n) {
  //Solution here
  return sentence.split(' ').filter(x => x.length> n)
}

// 8kyu: Total pressure calculation
solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => { 
  let Ptotal = (givenMass1/molarMass1+givenMass2/molarMass2)*.082*(temp+273.15)/volume
  return Ptotal
}

// 8kyu: Sum of differences in array
function sumOfDifferences(arr) {
  let descend = arr.sort((a,b)=>b-a)
  let sum = 0;
  for(let i = 0; i<descend.length-1; i++){
    let iter = descend[i]-descend[i+1];
    sum = sum + iter;
  }
  return sum
}
