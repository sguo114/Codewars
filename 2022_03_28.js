// 4 kata completed

// 8kyu: Function 3- multiplying two numbers
function multiply(a,b) {
  return a*b
}

// 8kyu: Convert a string to an array
function stringToArray(string){
  return string.split(' ')
}

// 8kyu: Expressions Matter
function expressionMatter(a, b, c) {
  let ops = [a*b*c, a*b+c, a+b*c, a*(b+c), (a+b)*c, /*a+c*b, a*c+b, (a+c)*b, a*(c+b),*/ a+b+c]
  ops.sort((a,b)=>a-b)
  return ops[ops.length-1] // highest achievable result
}

// 8kyu: Student's Final Grade
function finalGrade (exam, projects) {
  
  let grade = (exam,projects) => (exam>90 || projects>10) ? 100 : 
                                 (exam>75 && projects>=5)? 90: 
                                 (exam>50 && projects>=2)? 75 : 
                                 0 // final grade
  return grade(exam, projects)
  }

