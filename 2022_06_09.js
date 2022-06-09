// 2 kata completed

// 6kyu: Good vs Evil
function goodVsEvil(good, evil){
  let gWorth = {0:1, 1:2, 2:3, 3:3, 4:4,5:10}, 
      eWorth = {0:1,1:2,2:2,3:2,4:3,5:5,6:10},
      gTot = good.split(' ').reduce((a,b,i) => a + b*gWorth[i], 0), 
      eTot = evil.split(' ').reduce((a,b,i) => a+ b*eWorth[i], 0)
  
  return gTot > eTot ? 'Battle Result: Good triumphs over Evil':
         eTot > gTot ? 'Battle Result: Evil eradicates all trace of Good' :
         'Battle Result: No victor on this battle field'
}

// 8kyu: get character from ASCII Value
function getChar(c){
  return String.fromCharCode(c)
}
