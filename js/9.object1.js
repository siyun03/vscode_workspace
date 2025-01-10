// 객체참조변수는 const로 선언!
const obj1 = {};

const obj2 = {
    name  : '도란',
    age : 20
};

console.log(obj2); // {name : '도란', age : 20}
// JSON 표기법 => {"name" = ''도란", age = 20}

obj2.name = "젠"
console.log(obj2); // {name : 젠 , age : 20}

// 객체 리터럴 생성법
const o1 = {};

// Object 생성자 함수 생성법
const o2 = new Object();

// Person 생성자 함수 생성법
function Person(name, age){
    this.name = name;
    this.age = age;
}
const o3 = new Person('수니',20);
console.log(o3);
console.log(typeof o3); // object
console.log(o3 instanceof Person); //true
console.log(o3 instanceof Object); // true

// Object.create 메소드 생성법
// 모든 생성자함수는 prototype이라는 프로퍼티를 가진다.
const o4 = Object.create(Person.prototype);
o4.name = '순자';
o4.age =72;
console.log(typeof o4); // object
console.log(o4 instanceof Person); // true
console.log(o4 instanceof Object); //true

// class 객체 생성법
class Dog{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const dog = new Dog('치와와', 5);
console.log(dog);
console.log(typeof dog); // object
console.log(dog instanceof Dog); // true
console.log(dog instanceof Object); // true

const Lee = {
    name: '이상혁',
    age: 30,
    ['local-addr']: '서울시'
};
// 동적으로 프라퍼티 추가가 가능
Lee.hobby = '축구';
console.log(Lee);

// Lee.first-name  = '상혁' // Systax Error
Lee['first-name'] = '상혁';
console.log(Lee);

// 정의되지 않은 프라퍼티에 접근하면 undefined로 초기화
console.log(Lee.height); // undefined

// 프라퍼티 삭제
delete Lee.age;
console.log(Lee);

// 객체내의 프라퍼티 존재여부 확인
console.log('name' in Lee); // true
console.log('age' in Lee); // false

// 함수는 리터럴이므로 객체 프라퍼티의 값으로 함수를 사용할 수 있음
// name, age : 프라퍼티 | getName, getAge : 메소드
// 함수를 값으로 가진 프라퍼티를 메소드라고 부름
const kang = {
    name: '강감찬',
    age: 10,
    getName: function(){
        return this.name;
    },
    getAge: function(){
        return this.age;
    }
};
console.log(`${kang.getName()}은 ${kang.getAge()}살 입니다.`);





















