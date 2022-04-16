// 2 kata completed

// 8kyu: Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove (string) {
  return string[string.length -1] == '!' ? string.substring(0, string.length -1) : string
}

// 8kyu: Add new item (collections are passed by reference)
function addExtra( listOfNumbers ){
  return [...listOfNumbers, 4];
}
