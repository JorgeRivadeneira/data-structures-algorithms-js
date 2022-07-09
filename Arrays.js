const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage

strings.push('e');

console.log(strings);

//pop -> remove the last item in array
strings.pop();

console.log(strings);

//unshift -> add at the begining of the array
strings.unshift('x');

console.log(strings);

//splice
strings.splice(2,0,'jorge');

console.log(strings);