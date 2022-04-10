// 8kyu: Help the Elite Squad of Brazilian forces BOPE
function magNumber(info){
  let bullets = [
    {gun :'PT92',
     bullets: 17},
    {gun: 'M4A1',
     bullets: 30},
    {gun: 'M16A2',
     bullets: 30},
    {gun: 'PSG1',
     bullets: 5}
  ]
  for(let i = 0; i<bullets.length; i++){
    if(info[0] == bullets[i].gun){
      return Math.ceil(info[1]*3/bullets[i].bullets)
      break
    }
  }
}

// 7kyu: Vowel Count
function getCount(str) {
  var vowelsCount = str.replace(/[^aeiou]/g ,'').length;
  return vowelsCount;
}
