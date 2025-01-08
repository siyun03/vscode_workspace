console.log(1+'00'); // 100 문자열
console.log('hello'+100); // hello100 문자열

console.log(1=='1'); // T , == 타입을 변환해서라도 값이 같으면 true
console.log(1==='1'); // F , === 값과 타입이 모두 같아야 true

console.log(NaN==NaN); // F
console.log(Object.is(NaN, NaN)); // T

console.log(2**3);

const hong = {
    name: '홍길동',
    age: 25
};

// optional chaining 연산자 : null 방지가 목적
// 프라퍼티가 null이나 undefined이면 undefined 반환
// 그렇지 않으면 프라퍼티의 값을 반환
console.log(hong?.name); // 홍길동
console.log(hong?.hobby); // undefined

// null coalescing 연산자 : 기본값 할당이 목적
// 프라퍼티의 값이 null 또는 undefined이면 우항의 값을 반환
// 그렇지 않으면 프라퍼티의 값을 반환
console.log(hong.name??'강감찬'); // 홍길동
console.log(hong.hobby??'독서'); // 독서

// 객체의 프라퍼티 제거 연산자
delete hong.name;
console.log(hong);

// 객체내의 프라퍼티 존재 여부 확인 연산자
console.log('age' in hong); // T
console.log('name' in hong); // F
