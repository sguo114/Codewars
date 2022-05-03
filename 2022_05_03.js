// 2 kata completed

// 6kyu: Are they the same?
function comp(array1, array2){
  let same = true
 
  if(array2!= null && array1 != null){
    array1.sort((a,b)=>a-b)
    array2.sort((a,b)=>a-b)
    for(let i = 0; i<array1.length; i++){
      if(array1[i]*array1[i] != array2[i]){
        same = false
        break;
      }
    }
  } else{
    same = false
  }
  return same 
}

// 2kyu: Multi Line Task++: Hello World
f=
''
[
'\
t\
o\
S\
t\
r\
i\
n\
g\
']
[
'\
b\
i\
n\
d\
']
(
'\
H\
e\
l\
l\
o\
,\
 \
w\
o\
r\
l\
d\
!'
)
