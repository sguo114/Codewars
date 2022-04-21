// 1 kata completed

// 5kyu: Value of x
function valueOfX(eq) {
  let array = eq.split(' '), leftArr=[], rightArr=[]
  let equalInd = array.indexOf('=')
  let xside='', ans, x, swap
  
  for(let i = 0; i<equalInd; i++){
    if(isNaN(array[i])&&array[i]!='x'){
      leftArr.push(array[i]+array[i+1])
      i++
    } else{
      leftArr.push(array[i])
    }
    array[i].includes('x')?xside = 'left':xside = xside
  }
  
  for(let i = equalInd+1; i<array.length;i++){
    if(isNaN(array[i])&&array[i]!='x'){
      rightArr.push(array[i]+array[i+1])
      i++
    } else{
      rightArr.push(array[i])
    }
    array[i].includes('x') ?xside = 'right':xside = xside
  }
  
  if(xside ==='left'){
    x = leftArr.filter(ind=>ind.includes('x'))
    swap = leftArr.filter(ind=>!ind.includes('x'))
    swap.length>1?swap = swap.reduce((a,b)=>Number(a)+Number(b)):swap = Number(swap)
    ans = rightArr.reduce((a,b)=>Number(a)+Number(b)) - swap
  } else{
    x = rightArr.filter(ind=>ind.includes('x'))
    swap = rightArr.filter(ind=>!ind.includes('x'))
    swap.length>1?swap = swap.reduce((a,b)=>Number(a)+Number(b)):swap = Number(swap)
    ans = leftArr.reduce((a,b)=>Number(a)+Number(b)) - swap
  }

  return x[0].length===1?ans:x[0][0]=='+'?ans:-ans
}

