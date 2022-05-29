// kata completed

// 6kyu: Fibonacci Rabbits
function fib_rabbits(n, b) {
  let immature = 1, adult = 0
  for(let i = 0; i<n ; i++){
    let temp = immature
    immature = adult*b
    adult = temp + adult
  }
  return adult
}
