/*
동적타이핑 (dynamic typing) 
: 실행시간 (runtime)에 변수의 타입이 결정되고 변경도 가능
: 인터프리티 언어의 특성
*/

let l;
console.log(typeof l); // undefined

l = 1;
console.log(typeof l); // number

l = 'hi';
console.log(typeof l); // string

l = false;
console.log(typeof l); // boolean

l = Symbol();
console.log(typeof l); // symbol

l = {};
console.log(typeof l); // object

l = null;
console.log(typeof l); // object

l = [];
console.log(typeof l); // object

l = /[abc]/;
console.log(typeof l); // object

l = function(){};
console.log(typeof l); // function

const obj = {};
console.log(obj instanceof Object); // T
console.log(obj instanceof Array); // F
console.log(obj instanceof Function); // F

const obj2 = null;
console.log(obj2 instanceof Object); // F

const func = function(){};
console.log(func instanceof Object); // T
console.log(func instanceof Function); // T

// 결론) 모든 function은 object, 모든 object가 function은 아님!

console.log(0==-0);












