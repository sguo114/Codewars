// kata completed

// 5kyu: Simple assembler interpreter
function simple_assembler(program) {
  let register = {}
  for(let i = 0; i<program.length; i++){
    let curr = program[i][4], 
        instr = program[i].slice(0,3),
        test = Number(program[i].slice(6)),
        val = isNaN(test) ? program[i].slice(6) : test
    
    switch(instr){
        case 'mov':
          register[curr] = isNaN(val) ? register[val] : val
          break;
        case 'inc':
          register[curr] += val!=0 ? register[val] : 1
          break;
        case 'dec':
          register[curr] -= val!=0 ? register[val] : 1
          break;
        case 'jnz':
          if(register[curr] != 0){
            i = i + Number(program[i].slice(6)) - 1
          }
          break;
        default:
          console.log('Empty action')
    }
  }
  return register
}
