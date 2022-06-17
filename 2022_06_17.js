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

// 6kyu: Fun with lists: filter
function filter(head, p) {
  if(head === null) return null
  
  if(p(head.data)){
    return new Node(head.data, filter(head.next, p))
  } else{
    return filter(head.next, p)
  }  
}
