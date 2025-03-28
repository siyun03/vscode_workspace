// this : 메모리상에서 현재 참조되고 있는 객체 자신
//          객체의 강조를 저장하고 있는 객체참조변수

console.log(this); // 노드환경에서 , 전역객체, 웹브라우져환경에서는 window

// 자바스크립트에서 함수가 생성자함수, 메소드, 일반함수냐를 구분하는 것은
// 함수가 호출될 때  결점됨
// const func = function(){};
// 함수를 일반적으로 호출하면 일반함수 ec) func();
// 함수를 객체에 메소드화해서 호출하면 메소드 ex) const obj = {func}; 
// 함수를 new 키워드와 함께 호출하면 생성자함수 ex) new func();

// 생성자함수 내에서 this는 생성자 함수를 통해 만들어질 객체 자신
function Person(name, age){
    this.name = name;
    this.age = age;
}

// 함수 호출방식에 따른 this바인딩

// Car는 함수일 뿐, 호출시점에 생성자함수, 메소드, 일반함수인지가 결점됨
const Car = function(){
    console.log(this);
};

// 1. 일반함수로 호출 : this는 전역객체
Car(); // this는 node의 전역객체인 global

// 2. 메소드 호출방식으로 호출 : this는 메서드를 호출한 객체
const obj = {
    name: '객체',
    Car
};
obj.Car(); // this는 obj

// 3. 생성자함수 호출방식으로 호출 : this는 생성자함수를 통해 생성될 객체
new Car(); // this는 Car {}

// 동적 this 바인딩
// Function.prototype.apply/call/bind
function func (age, kor, eng){
    this.age = age;
    this.kor = kor;
    this.eng = eng;
    console.log(this.name);
    console.log(this.age);
    console.log(this.kor + this.eng);
}
const person = {name:  '홍길리'};

// apply : this 바인딩객체, 인자배열
func.apply(person,[10,100,90]); // 홍길동 50 100 80
// call : this 바인딩객체, 인자리스트 나열
func.apply(person,20, 100, 90); // 홍길동 80 100 80
// bind : this를 함수 호출시점에 바인딩, this바인딩 된 함수를 반환
funcnew = func.bind(person);
funcnew(); // 홍길동 undefindef NaN

const Person2 = {name: '강감찬'};
funcnew = func.bind(person2);
funcnew2(); // 강감찬 undefined, NaN








