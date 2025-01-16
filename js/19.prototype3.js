function Bird(){
    this.name = '새';
}

function Chicken(){
    this.name = '닭';
}

// Chicken이 Bird를 상속받음
Chicken.__proto__ = Bird.prototype;

// Chiken 객체 생성
const chicken = new Chicken();

// 프라퍼티 쉐도잉 (property shadowing)
// Chicken생성자함수에 name이 있으므로 Bird생성자 함수의 name이 가리킴

// 오버라이딩
// 프로토타입에서 정의한 메소드를 인스턴스에서 정의
Bird.prototype.getName = function(){
    return this.name;
};

Chicken.prototype.getName = function(){
    return this.name;
}

const bird1 = new Bird()
const chicken1 = new Bird()

console.log(bird1.getName());
console.log(chicken1.getName());

// 인스턴스 메소드
bird1.getName = function(){
    return '새';
}
chicken1.getName = function(){
    return '닭';
}

// 프로토타입 w 메소드 삭제
delete chicken1.getName;
console.log(chicken1.getName()); // TypeError

// 프로퍼티 열거
function Person(name, age){
    this.name = name;
    this.age = age;
}

// instanceof : 상속계층도에 프라퍼티가 존재하는지
const person = new Person('홍길동', 20);
console.log(person instanceof Person);
console.log(person instanceof Object);

// in : 프로포타입체인상에 프라퍼티가 존재하는지
console.log('name' in person); //true
console.log('address' in person); // falsc

// for in : 프로토타입체인상에 열거 가능한 프라퍼티의 수만큼 반복
for (const key in person){
    console.log(person[key]); // 홍길동
    console.log(Object.getOwnPropertyDescriptors(person));
};

/**
    value : 프라퍼티의 값
    writable : 변경가능 여부
    enumerable : for in으로 열거 가능
    configurable : 삭제 가능 여뷰
 */

    /**
{
  name: {
    value: '홍길동',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 20, writable: true, enumerable: true, configurable: true }
}
     */

function Car(company, model){
    this.company = company;
    this.model = model;
    this.run = function(){
    console.log('차달려');
    }
}

const car = new Car('BMW', '520D')
console.log(car.company+ ' ' + car .model );
car.run();

// 정적프라퍼티 & 정적메소드
// 생성자함수에 정의한 프라퍼티와 메소드, 생성자함수로 접근
// 인스턴스로는 접근 불가
Car.price = 1000;
Car.stop = function(){
    console.log('차가 멈춘다');
};
console.log(Car.price); // 1000
console.log(car.price); // undefined
console.log(Car.stop()); // 차가 멈춘다
// console.log(car.stop()); // TypeError

// 정적프라퍼티/ 메소드
// 생성자함수에 선언한 프라퍼티/ 메소드
// 생성자함수로만 접근 가능

// 프로토타입 프라퍼티/ 메소드
// 프로토타입에 선언한 프라퍼티/ 메소드
//프로토타입 프라퍼티는 인스턴스 프라퍼티에 의해 프라퍼티쉐도잉 됨
// 프로토타입 메소드는 인스턴스메소드에 의해 오버라이딩 됨

// 인스턴스프라퍼티/ 메소드
// 인스턴스에 선언한 프라퍼티/ 메소드
// 인스턴스로 접근 가능













