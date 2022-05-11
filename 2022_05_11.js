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
