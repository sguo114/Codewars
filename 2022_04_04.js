// 6kyu: Duplicate Encoder 
function duplicateEncode(word){
    // ...
  return word
  .toLowerCase()
  .split('')
  .map((element, index, array)=> array.indexOf(element) == array.lastIndexOf(element)? '(':')')
  .join('')
  }
  
  
//   console.log(word)
//   let freq = {}
//   for (let i =0; i<word.length; i++){
//     let character = word.charAt(i).toLowerCase()
//     if(freq[character]){
//       freq[character]+=1
//     } else{freq[character]=1}
//   }
//   console.log(freq)
//   for (let count in freq) {
//     console.log('mm',count)
//     let regex;
//     let hj = '\\' + count
//     if(count === '('||count ===')'){
//       regex = new RegExp(hj,"g")
//     } else{ regex = new RegExp(count,"g")}
                        
//     if(freq[count]>=2){  
//       word = word.toLowerCase().replace(regex,')')
//       console.log(word)
//     } else{ 
//       word = word.toLowerCase().replace(count, '(')
//     }
//   }
//   console.log(word)
//   return word
//}
