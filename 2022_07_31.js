// kata completed

// 5kyu: Extract the domain name from a url
function domainName(url){
  let str = url.includes('http://') ? url.substring(7) :
            url.includes('https://') ? url.substring(8) :
            url
  str = str.includes('www.') ? str.substring(4) : str
  
  return str.substring(0, str.indexOf('.'))
}
