console.log('Hello World');

const arr = [1,2,3];
arr.forEach(console.log);

userId = 1;
userName = 'Lee';
user = {id :1, name:'Lee'};
console.log(user);

console.log(score);
var score = 80;
console.log(score);

console.log(10/0);
console.log(10/-0);
console.log(1 * '한글');

var lol = '이것은 대체 무슨 일인가';
console.log(lol);

console.log('1+2 = ${1+2}');
console.log(`1+2 = ${1+2}`);

var key =  Symbol('key');
console.log(typeof key);
var obj = {};
obj[key] = 'value';
console.log(obj[key]);

var x = 5 , result;
result = x++;
console.log(x, result);

console.log('2'+1);

console.log(isNaN(NaN));
console.log(isNaN(1 + undefined));

// == 동등비교 값이 같냐
// === 일치 비교 값과 타입이 같냐
// != 부동등 비교 값이 다르냐
// !== 불일치 비교 값과 타입이 다르냐

console.log((-5) ** 3);

console.log(({})+'');
console.log(Array+'');
console.log(!!0);

// null 값이어도 오류나지 않고 undefined를 반환 시키게 함
var elem = null;
var value = elem?.value;
console.log(value);
var value = elem && elem.value;
console.log(value);

let man = {
    profile: {
      name: 'Alice',
      age: 30
    }
  };
  console.log(man.profile?.name);  // "Alice" (profile이 존재하므로 정상적으로 접근)
  console.log(man.profile?.address);  // undefined (address는 존재하지 않음)
  
  var person = {
    name : 'kim'
  };
  console.log(person['name']);

  