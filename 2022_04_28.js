// kata completed

// 6kyu: Bouncing Balls
function bouncingBall(h,  bounce,  window) {
  let count = 1
  if(h>0 && 0<bounce && bounce<1 && h>window){
    while(h>window){
      h = h*bounce
      h>window?count+=2: count
    }
    return count
  } else{return -1}
}

// 7kyu: Factorial
function factorial(n){
  let ans = n
  if(n<0||n>12){throw new RangeError('Range must be between 0 and 12')}
  for(let i = n-1; i>0; i--){
      ans = ans*i
  }
  return n ==0? 1:ans
}

