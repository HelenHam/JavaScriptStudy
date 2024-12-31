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

var 모듈 = {
    기능1 : function(a, b) {return a + b},
    기능2 : (a, b) => {return a + b},
    기능3: (a, b) => a + b
}

console.log(모듈.기능1(1,4));
console.log(모듈.기능2(1,4));
console.log(모듈.기능3(1,4));

class 모듈2 {
    constructor() {}
    기능1 (a, b) {
        return a + b
    };
    기능2 (a, b) {
        return a + b
    };
    기능3 (a, b) {
        return a + b
    };
}

const 객체 = new 모듈2();
console.log(객체.기능1(1,4));

a = 1;
b = "1";

if(a === b) {
    console.log("참")
} else {
    console.log("거짓")
}

for (i = 0 ; i < 5 ; i++){
    console.log(i);
}

console.log(i);