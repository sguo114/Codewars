// kata completed

// 7kyu: sPoNgEbOb MeMe
function spongeMeme(sentence) {
  let sent = sentence.split('').map((el,i)=> {
    if(/[a-zA-Z]/.test(el) && i%2 === 0) return el.toUpperCase();
    else if(/[a-zA-Z]/.test(el) && i%2 !== 0) return el.toLowerCase();
    else return el;
  })
  
  return sent.join('')
}
