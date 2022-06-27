// kata completed

// 7kyu: Going to the cinema
function movie(card, ticket, perc) {
  let count = 1, price = ticket*perc, B = card + price
  
  while(ticket*count <= Math.ceil(B)){
    price = price * perc
    B += price 
    count++ 
  }
  
  return count
};
