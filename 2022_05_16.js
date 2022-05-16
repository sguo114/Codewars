// 2 kata completed

// 5kyu: Sum of Pairs
function sumPairs(ints, s) {
  let seen = {};
  for (let i=0; i < ints.length; i++) {
    if (seen[s - ints[i]]) return [s-ints[i], ints[i]];
    seen[ints[i]] = true;
  }
  }

// 6kyu: Title Case
function titleCase(title, minorWords) {
  let titleArr = title.toLowerCase().split(' ')
  console.log(title, 'hi', minorWords, titleArr)
  let mWArr = minorWords !== undefined? minorWords.toLowerCase().split(' ') : ''
  
  for(let i = 0; i<titleArr.length; i++){
    if(!mWArr.includes(titleArr[i])){
      titleArr[i] = titleArr[i][0].toUpperCase() + titleArr[i].slice(1)
    } else if(i == 0 && title.length >0){
      titleArr[i] = titleArr[i][0].toUpperCase() + titleArr[i].slice(1)
    }
    
  }
  return titleArr.join(' ')
}
