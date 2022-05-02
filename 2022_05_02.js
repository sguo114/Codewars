// 6 kata completed

// 5kyu: ROT13
function rot13(str) {
  let abcs = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM',
      ans = []
  str.split('').forEach(el => abcs.includes(el) ? ans.push(abcs[abcs.indexOf(el)+13]) : ans.push(el))
  return ans.join('')
}

// 6kyu: Smallest Permutation
function minPermutation(n) {
  let ans = String(n).split('').sort((a,b)=>a-b)
  console.log(ans)
  if(ans[0] == 0){
    let lowest
    for(let i = 1; i<ans.length;i++){
      if(ans[i]!=0){
        lowest = i; 
        break;
      }
    }
    let temp = ans[0]
    ans[0] = ans[lowest]
    ans[lowest] = temp
  } else if(ans[0] == '-' && ans[1] == 0){
    let lowest
    for(let i = 1; i<ans.length;i++){
      if(ans[i]!=0){
        lowest = i; 
        break;
      }
    }
    let temp = ans[1]
    ans[1] = ans[lowest]
    ans[lowest] = temp
  }
  
  return Number(ans.join(''))
}

// 7kyu: Check the exam
function checkExam(array1, array2) {
  let score = 0
  for(let i = 0; i<array2.length; i++){
    array1[i] == array2[i] ? score += 4 : array2[i] == ''? score : score -= 1
  }
  return score < 0 ? 0 : score
}

// 8kyu: Function 2- squaring an argument
function square(n){
  return Math.pow(n,2)
}

// 8kyu: Invert Values
function invert(array) {
  return array.map(el=> el * -1)
}

// 8kyu: 5 without numbers
function unusualFive() {
  return 'hello'.length
}
