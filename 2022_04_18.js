// 6 kata completed

// 6kyu: If you can read this...
function to_nato(words) {
	let NATO = {a: 'Alfa', 
              b:'Bravo',
              c:'Charlie',
              d:'Delta',
              e:'Echo',
              f:'Foxtrot', 
              g:'Golf', 
              h:'Hotel', 
              i:'India', 
              j:'Juliett', 
              k:'Kilo', 
              l:'Lima',
              m:'Mike',
              n:'November',
              o:'Oscar',
              p:'Papa',
              q:'Quebec',
              r:'Romeo',
              s:'Sierra',
              t:'Tango',
              u:'Uniform',
              v:'Victor',
              w:'Whiskey',
              x:'Xray',
              y:'Yankee',
              z:'Zulu'}
  let array = words.split('').filter(x=>x!=' ').map(x=>x.toLowerCase())
  console.log(words,array)
  for(let i = 0;i<array.length;i++){
    if(NATO[array[i]] != undefined){
      array[i] = NATO[array[i]]
    } else{array[i]}
  }
  return array.join(' ')
}

// 7kyu: You Got Change?
function giveChange(amount) {
  let array = [0,0,0,0,0,0]
  let dollar = [1,5,10,20,50,100]
  let i = 5
  while(amount>0){
    console.log(amount)
    if(amount>=dollar[i]){
      amount = amount-dollar[i]
      array[i] += 1
      console.log(amount,array)
    } else{i= i-1}
  }
  return array
}

// 7kyu: Categorize New Member
function openOrSenior(data){
  return data.map(x=> x[0]>=55 && x[1]>7 ? "Senior" : "Open" )
}

// 7kyu: Sort Numbers
function solution(nums){
  return nums == null? []: nums.sort((a,b)=>a-b)
}

// 8kyu: Reversed sequence
const reverseSeq = n => {
  let ans = []
  for(let i = 0; i<n; i++){
    ans.push(n-i)
  }
  return ans;
};

// 8kyu: Convert number to reverse array of digits
function digitize(n) {
  return String(n).split('').map(x=>Number(x)).reverse()
}

