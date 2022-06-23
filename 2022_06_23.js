// kata completed

// 6kyu: Error Correction #1: Hamming Code
function encode(text) {
  let ascii = []
  for(let i = 0; i<text.length; i++){
    let bin = ('00000000'+text[i].charCodeAt().toString(2)).slice(-8)
    ascii.push(bin.split('').map(el=>el.repeat(3)).join(''))
  }
  return ascii.join('');
}

function decode(bits) {
  let corBits = []
  for(let i = 0; i<bits.length; i+=3){
    if(bits.slice(i,i+3).split('').filter(el=>el==='1').length >=2){
      corBits.push(1)
    } else{
      corBits.push(0)
    }
  }
  
  let bytes = corBits.join(''), ascii = []
  
  for(let i = 0; i<bytes.length; i+=8){
    ascii.push(parseInt(bytes.slice(i,i+8),2))
  }
  
  return String.fromCharCode(...ascii);
}

// 7kyu: The highest profits win!
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}
