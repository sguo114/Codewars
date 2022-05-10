// kata completed

// 6kyu: 1/n- Cycle
function cycle(n) {
  if(n%2==0 || n%5==0){
    return -1
  } else {
    let result = 10%n , count = 1
    while(result!=1){
      result = (result*10)%n
      count ++
    }
    return count
  }
}
