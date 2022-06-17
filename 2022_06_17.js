// kata completed

// 6kyu: Fun with lists: reduce
function reduce(head, f, init) {
  let curr = head, acc = init
   
  while(curr !== null){
    acc = f(acc, curr.data)
    curr = curr.next
  }
  
  return acc
}
