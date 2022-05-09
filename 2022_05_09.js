// kata completed

// 6kyu: Detect Panagram
function isPangram(string){
  let abcs = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return !abcs.map(el=>string.toLowerCase().includes(el)).includes(false)
}
