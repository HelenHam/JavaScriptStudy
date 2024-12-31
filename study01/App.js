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

// data => json
// JS에서 data를 다룰 때는 무조건 json으로 다룸

// java에서는 {key:value} 인 게 dto
// JS에서는 json, 객체로 만들어져 function이 아닌 데이터를 담은 것이 json
// {key:value} 형태로 보냄

const test = {
    a1: a,
    b1: 2,
    c1: "삼"
}

console.log(test.a1);

var {b1:bb, c1} = test;
console.log(bb, c1);

const test2 = test
const test3 = {...test};

console.log(test, test2, test3);

test.e1 = false;
test2.b1 = 5;
test3.d1 = true;
const test4 = {...test, ...test2, ...test3};
// Key는 중복이 될 수 없음, 가장 마지막에 담긴 값으로 처리
// 깊은 복사 시 왼쪽부터 담김

console.log(test, test2, test3);
console.log(test4);
