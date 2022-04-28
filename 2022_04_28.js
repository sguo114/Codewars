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

// 7kyu: Sum of odd numbers
function rowSumOddNumbers(n) {
  let count = 0 
  for(let i =1; i<n;i++){
    count += i
  }
  
  let ans = count*2-1
  let arr = []
  for(let i = 0; i<n; i++){
    ans+=2
    arr.push(ans)
  }
  return n==0||n==1? 1:arr.reduce((a,b)=>a+b)
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

