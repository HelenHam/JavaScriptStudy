console.log("안녕하세요");

var a = 1;
let b = 2;
const c = 3;

a = 2;
b = 3;

function add(a, b) {
    return a + b;
}

//const add2 = add;
//const add2 = (a,b) => {}
const add2 = (a,b) => a + b;

const add3 = add;

console.log(add2(1,3));
console.log(add3(1,3));