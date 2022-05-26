// kata completed

// 6kyu: Ball upwards
function maxBall(v0) {
  let v = v0*1000/3600, g = 9.81, t = .1, h1 = (v*t - .5*g*t*t), h = 0, count = 0
  while(h1>h){
    count++
    t += .1
    h = h1
    h1 = (v*t - .5*g*t*t)
  }
  return count
}
