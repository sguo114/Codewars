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

// 8kyu: Sum arrays
function sum (numbers) {  
    return numbers.reduce((a,b)=>a+b, 0)
};

// 8kyu: How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
  return name == "Zach" ? 18 : 0
}
