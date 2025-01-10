// 함수 선언식
function add(a, b){
    return a + b;
}
console.log(add(1,2));
console.log(add); // [Function: add]

// 함수표현식 (값으로서의 함수)
const mul = function(a, b){
    return a * b;
};
console.log(mul(2, 4));

// Function 생성자 함수
const dev = new Function('a', 'b', 'return a/b');
console.log(dev(10, 2));

// 화살표 함수 (arrow function) : 화살표 함수 리터럴
// 파라미터가 1개인 경우는 파라미터 괄호 생략 가능
const minus = (a, b) => {return a - b };
console.log(minus(20, 4));

// 함수의 파라미터
const func = function(a, b, c){
    console.log(`a:${a}, b: ${b}, c: ${c}`);
    return a + b + c;
};
console.log(func); // [Function: func]
console.log(func(1)); // a:1, b: undefined, c: undefined
console.log(func(1, 2)); // a:1, b: 2, c: undefined
console.log(func(1, 2, 3));
console.log(func(1, 2, 3, 4)); // a:1, b: 2, c: 3  > 6

// 함수의 기본값
// 값이 할당되지 않은 파라미터의 초기값을 설정
const func2 = function(a=0, b=0) {
    return a + b;
};
console.log(func2()); // 0
console.log(func2(1)); // 1
console.log(func2(1, 2)); // 3

// 함수 파라미터로 함수 전달
// 함수에 데이터뿐 아니라 기능도 전달할 수 있다 => 유연하고 확장성 있음
const func3 = function(a, b, f){
    console.log(f(a, b));
};
func3(1, 2, (a, b) => a + b);
func3(3, 4, (a, b) => a * b);