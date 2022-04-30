// 2 kata completed

// 7kyu: Sort array by string length
function sortByLength (array) {
  return array.sort((a,b)=>a.length-b.length)
};

// 8kyu: Sort and star
function twoSort(s) {
  let sort = s.sort()
  return s[0].split('').join('***')
}
