// kata completed

// 5kyu: The Fruit Juice
function Jar() {
  this.conc = {}
}

Jar.prototype.add = function(amount, type) {
  if(this.conc[type]){
    this.conc[type] += amount
  }else{
    this.conc[type] = amount
  }
};

Jar.prototype.pourOut = function(amount) {
  let totalAmount = this.getTotalAmount()
  
  for(let type of Object.keys(this.conc)){
    let percent = amount/totalAmount
    this.conc[type] -= this.conc[type] * percent
  }
};

Jar.prototype.getTotalAmount = function() {
  return Object.values(this.conc).reduce((a,b)=>a+b,0)
};

Jar.prototype.getConcentration = function(type) {
  return this.conc[type] ? this.conc[type]/this.getTotalAmount() : 0
}

// 6kyu: Mix Fruit Juice
function mixFruit (arr) {
  let fruit = {banana:5, orange:5, apple:5, lemon:5, grapes:5, avocado:7, strawberry:7, mango:7}
  
  let request = arr.map(el=>el.toLowerCase()).map(el=>fruit[el]?fruit[el]:9)
  return Math.round(request.reduce((a,b)=>a+b)/arr.length)
}
