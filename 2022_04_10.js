// 8kyu: Fundamentals: Return
function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return a ** b
}
    
function subt(a,b){
    return a - b
}

// 8kyu: Name Shuffler
function nameShuffler(str){
  return str.split(' ').reverse().join(" ");
}

// 8kyu: Short Long Short
function solution(a, b){
  return (a.length > b.length) ? b + a + b : a + b + a;
}

// 8kyu: Capitalization and Mutability 
function capitalizeWord(word) {
  word = word[0].toUpperCase() + word.substring(1);
  return word;
}
