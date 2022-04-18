// 3 kata completed 

// 8kyu: For Twins: 2. Math Operations
function iceBrickVolume(radius, bottleLength, rimLength) {
  return 2*Math.pow(radius,2)*(bottleLength-rimLength)
}

// 8kyu: Remove First and Last Character
function removeChar(str){
  return str.length>1?str.slice(1,str.length-1):str
};

// 8kyu: Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
function remove (string) {
  return string.split('!').join('')+'!'
}
