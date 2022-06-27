// kata completed

// 6kyu: Ping Pong
function pingPong(sounds) {
  let pingPts = 0, pongPts = 0, last = "", first = "", bad = ""
  
  for(let i = 0; i<sounds.length; i+=5){
    let sound = sounds.slice(i,i+4)
    if(sound !== "ping" && sound !== "pong"){
      if(first === "pong" && last === "ping"){
        pongPts++;
        first = ""
      } else if(first === "ping" && last === "pong"){
        pingPts++;
        first = ""
      }
      bad = sound;
    } else {
      if(bad !== "ping" && bad!== "pong") first = sound
      last = sound
      bad = sound
    }
  }
  return pingPts > pongPts ? "ping" : pingPts < pongPts ? "pong" : last === "ping" ? "pong" : "ping"
}

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
