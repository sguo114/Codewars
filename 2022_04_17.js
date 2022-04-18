// 3 kata completed

// 8kyu: Count of positive/ sum of negatives
function countPositivesSumNegatives(input) {  
  let [count,sum] = [0,0]
  if(input == null||input.length==0){
    return []
  } else{
    for(let i = 0; i<input.length;i++){
    input[i]>0?count=count+1:sum=sum+input[i]
    }
  }
  return [count,sum]
}

// 8kyu: Abbreviate a Two Word Name
function abbrevName(name){
  return name.split(' ').map(x=>x[0].toUpperCase()).join('.')
}

// 8kyu: A Neelde in the Haystack
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}
