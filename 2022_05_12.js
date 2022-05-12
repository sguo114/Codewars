// kata completed

// 7 kyu: Fix string case
function solve(s){
  let freq = {uc:0, lc:0}
  s.split('').forEach(el=>el.toUpperCase()==el?freq['uc']+=1:freq['lc']+=1)
  return freq['uc']>freq['lc']?s.toUpperCase():s.toLowerCase()
}
