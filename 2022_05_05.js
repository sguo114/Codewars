// 2 kata completed

// 6kyu: Which are in?
function inArray(array1,array2){
  let ans = []
  for(let i = 0; i<array1.length; i++){
    for(let j = 0; j<array2.length; j++){
      if(array2[j].includes(array1[i])){
        ans.push(array1[i])
        break;
      }
    }
  }
  return ans.sort()
}

// 7kyu: The Coupon Code
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let date = {January:1, 
              February:2, 
              March:3, 
              April:4, 
              May:5, 
              June:6, 
              July:7, 
              August:8, 
              September:9, 
              October:10, 
              November:11, 
              December: 12},
      cD = currentDate.replace(',','').split(' '), 
      eD = expirationDate.replace(',','').split(' '), 
      cDDate = Number(date[cD[0]]+cD[1]), 
      eDDate = Number(date[eD[0]]+eD[1])
  return enteredCode === correctCode && (cD[2]<eD[2] || (cD[2]==eD[2]&&cDDate<=eDDate))  
}
