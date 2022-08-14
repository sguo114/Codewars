// kata completed

// 6kyu: Fibonacci, Tribonacci, and Friends
function Xbonacci(signature,n){
  let x = signature.length, current = signature.length
  
  while(signature.length<n){
    signature[current] = 0
    for(let i = 1; i<=x; i++){
      signature[current] += signature[current-i]
    }
    current++
  }

  return signature.slice(0, n)
}
