// kata completed

// 7kyu: sPoNgEbOb MeMe
function spongeMeme(sentence) {
  return sentence.split('').map((el,i) => i%2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('')
}
