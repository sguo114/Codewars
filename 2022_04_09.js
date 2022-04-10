// 8kyu: How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  return classPoints.sort((a,b)=>a-b).reduce((cumm,next)=>cumm+next,0)/classPoints.length < yourPoints  
}
