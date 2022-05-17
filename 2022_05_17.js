// kata completed

// 6kyu: Pentabonacci
function countOddPentaFib(n) {
  if(n<7 && n>0) return 1
  if((n-1)%6 === 0) return (n-1)/3
  if((n-2)%6 === 0) return (n-2)/3 + 1
  if(Math.floor(n/3)%2 === 1){
    return Math.floor(n/3)
  } else{
    return Math.floor(n/3) - 1 
  }
}
