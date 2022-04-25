// 2 kata completed

// 6kyu: Who likes it?
function likes(names) {
  return names.length<1? 'no one likes this': 
  names.length>3? `${names[0]}, ${names[1]} and ${names.length-2} others like this`:
  names.length===1? `${names[0]} likes this`:
  names.length===2? `${names[0]} and ${names[1]} like this`:
  `${names[0]}, ${names[1]} and ${names[2]} like this`
}

// 8kyu: You Can't Code Under Pressure
function doubleInteger(i) {
  return i*2;
}
