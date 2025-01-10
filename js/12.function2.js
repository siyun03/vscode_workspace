// 즉시실행함수
// 익명함수를 만들어서 한번만 실행할 목적으로 만드는 함수
(function () {
    console.log('hello');
}());

(function(a, b){
    console.log(a+ b);
}(3, 4));

let result = (function (a, b){
    return a+ b;
}(3, 7));
console.log(result);

// 중첩함수 (nested function)
// outer function scope : o, inner
// inner function scope : i
// inner함수는 outer함수의 스코프에 접근 가능 (inner에서 o 접근가능)
// outer함수는 inner함수의 스코프에 접근 불가 (outer에서 i 접근불가능)
function outer(){
    let o = 1;
    function inner(){
        console.log(o);
        let i = 2;
        console.log(o + i);
    }
    inner();
}
outer();

// 콜백함수 (callback function) : 함수에 인자로 전달되는 함수
// 고차함수 (high-order function) : 함수를 인자로 전달받는 함수
function repeat(n, f){
    for(let i=0; i<n; i++){
        f(i);
    }
}
const logAll = function(i){
    console.log(i);
}

repeat(5, logAll);
const logOdd = function(i){
    if(i%2) console.log(i);
}
repeat(5, logOdd);

console.log('');
// 실습 : 두 수를 입력하면 사칙연산을 수행하는 고차함수, 콜백함수
// 고차함수
function calc(a, b, f){
    console.log(f(a,b));
}
// 콜백함수
// const add = function(a, b){
//     return a+ b;
// }
// const add = (a,b) => a+b;
calc(2,5,(a,b) => a+ b);

// const bba = function(a, b){
//     return a- b;
// }
// calc(2,5,bba);
calc(2,5,(a,b) => a- b);

// const nanu = function(a, b){
//     return a/ b;
// }
// calc(2,5,nanu);
calc(2,5,(a,b) => a/ b);

// const gop = function(a, b){
//     return a* b;
// }
// calc(2,5,gop);
calc(2,5,(a,b) => a* b);
console.log('');

// 실습 : 두 수와 콜백함수 두개를 전달하고 앞의 수가 크면 첫번 째 콜백, 뒤의 수가 크면 두번 째 콜백함수 호출
//          두 수가 같으면 same 이라는 문자열 출력
//          첫번째 콜백함수는 두 수의 차를 연산
//          두번째 콜백함수는 뒤의 수의 제곱과 앞의 수 제곱의 차를 연산

// 고차함수
function calc2(a, b, f1, f2){
   if(a>b) console.log(f1(a,b));
   else if (b>a) console.log(f2(a,b));
   else console.log('same');
}
// 콜백함수
calc2(4,2,(a,b) => a-b, (a,b) =>  (b**b)-(a**a)); // a>b
calc2(2,2,(a,b) => a-b, (a,b) => (b**b)-(a**a)); // a=b
calc2(2,4,(a,b) => a-b, (a,b) => (b**b)-(a**a)); // a<b

// 고참함수를 즉시실행함수로 실행
(function calc3(a, b, f1, f2){
   if(a>b) console.log(f1(a,b));
   else if (b>a) console.log(f2(a,b));
   else console.log('same');
}(4,2,(a,b) => a-b, (a,b) =>  (b**b)-(a**a)));

// 콜백함수를 객체 프라퍼티로 생성
const funcObj = {
    add: (a, b) => a+ b,
    bba: (a,b) => a- b,
    gop: (a,b) => a*b,
    naa: (a,b) => a/b
};
function mainfunc(a, b, f){
    console.log(f(a, b));
}

mainfunc(3,5,funcObj.add);
mainfunc(3,5,funcObj.bba);
mainfunc(3,5,funcObj.gop);
mainfunc(3,5,funcObj.naa);
// 실습 : 수를 하나 입력하면 5배한 후 3을 빼고 2로 나누는 로직 구현 (고차함수와 콜백함수 활용)
function calc3(a,f1){
    console.log(f1(a));
}
calc3(3,(a) => (a*5-3)/2);
// or
function calc4(n, f1, f2, f3){
    console.log(f3(f2(f1(a))));
}
calc(5, a=>a*5, a=>a-3, a=> a/2);

// 순수함수 (pure function)
// 외부 변수의 값에 영향을 주지 않는 함수
// 순수함수는 기본타입의 값만 파라미터로 가짐
let count1 = 0;
function increase1(n){ // 순수함수
    return ++n;
}
// increase1 함수를 몇번 호출하던지 count1의 값은 불변
// count1은 기본 number타입 0을 함수 파라미터에 복사해 줌
console.log(increase1(count1)); //1
console.log(increase1(count1)); //1
console.log(count1); //0


let count2 = 0;
function increase2(){ // 비순수함수
    return ++count2;
}
// increase2함수를 수행할 때마다 count2의 값이 변경됨
console.log(increase2(count2)); //1
console.log(increase2(count2)); //2
console.log(count2); //2




















