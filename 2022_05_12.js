// 3 kata completed

// 6kyu: Mastermind Hint Peg
function getHints(answer, guess) {
  let ansFreq = {}, guessFreq = {}, black = 0, white = 0
  while(guess.length>0){
    if(answer[0]== guess[0]){
      black += 1
    } else{
      ansFreq[answer[0]] ? ansFreq[answer[0]]+= 1 : ansFreq[answer[0]] = 1
      guessFreq[guess[0]] ? guessFreq[guess[0]] += 1: guessFreq[guess[0]] = 1
    }
    answer.shift()
    guess.shift()
  }
  
  let keys = Object.keys(guessFreq)
  for(let i = 0; i<keys.length; i++){
    if(ansFreq[keys[i]]){
      ansFreq[keys[i]] > guessFreq[keys[i]] ? white += guessFreq[keys[i]] : white += ansFreq[keys[i]]
    }
  }
  return {'black':black, 'white':white}
}

// 7kyu: Summing a number's digits
function sumDigits(number) {
  return (''+Math.abs(number)).split('').reduce((a,b)=>a+Number(b),0)
}

// 7 kyu: Fix string case
function solve(s){
  let freq = {uc:0, lc:0}
  s.split('').forEach(el=>el.toUpperCase()==el?freq['uc']+=1:freq['lc']+=1)
  return freq['uc']>freq['lc']?s.toUpperCase():s.toLowerCase()
}
