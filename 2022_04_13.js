// 2 kata completed

// 7kyu: Sum up the random string (2 solutions)
function sumFromString(str){
  return (str.match(/\d+/g)|| []).map(Number).reduce((a,b)=>a+b,0)
}

//first solution
function sumFromString(str){
  let replace = str.replace(/[^0-9]/g,'|')
  let arr = [], num = ''
  console.log(replace)
  for(let i = 1; i<= str.length; i++){
    num += replace[i-1]
    replace[i] == '|' && replace[i-1] != '|'? arr.push(num): i == str.length&& replace[i]!='|'? arr.push(num): arr = arr
    num.includes('|')?num = '': num = num
  }
  console.log(arr)
  return arr.filter(x => x!='|').reduce((cumm,next)=>Number(cumm)+Number(next),0)
}

// 8kyu: Hello, Name or World!
function hello(name) {
  let prompt
  name == '' || name == undefined?  prompt = 'World': prompt = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
  return `Hello, ${prompt}!`;
}

