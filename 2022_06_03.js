// 2 kata completed

// 6kyu: Handshake Problem
function getParticipants(handshakes){
  if(handshakes === 0) return 0
  if(handshakes === 1) return 2
  let count = 1
  while(handshakes>0){
    handshakes -= count
    count += 1
  }
  return count 
}

// 6kyu: Matrix Addition
function matrixAddition(a, b){
  return a.map( (el,i) => el.map((a,j) => a+b[i][j]))
}
