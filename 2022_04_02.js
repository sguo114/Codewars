// 8kyu: The Feast of Many Beasts
function feast(beast, dish) {
//your function here
  let bFirstLast = beast.charAt(0)+beast.charAt(beast.length-1)
  let dFirstLast = dish.charAt(0)+dish.charAt(dish.length-1)
  if(bFirstLast === dFirstLast){
    return true
  } else{ return false}
}
