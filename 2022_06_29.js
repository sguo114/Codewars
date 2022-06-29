// kata completed

// 6kyu: Simple card game
function winner(deckSteve, deckJosh) {
  let pts = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, T:10, J:11, Q:12, K:13, A:14},
      steve = 0, 
      josh = 0
  
  deckSteve.forEach((el,i)=> 
                    pts[deckSteve[i]] > pts[deckJosh[i]] ? steve++ : 
                    pts[deckSteve[i]] < pts[deckJosh[i]] ? josh++ : 
                    null)
  
  return steve==josh ? "Tie" : steve>josh ? 
         `Steve wins ${steve} to ${josh}` : 
         `Josh wins ${josh} to ${steve}`
}

// 7kyu: JavaScript Array Filter
function getEvenNumbers(numbersArray){
  return numbersArray.filter(el=>el%2 ==0)
}
