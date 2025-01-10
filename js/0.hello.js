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

  var prefix = 'prop';
  var i = 0;
  var obj = {};
  obj[prefix + '-' + ++i] = i;
  obj[prefix + '-' + ++i] = i;
  obj[prefix + '-' + ++i] = i;
  console.log(obj);

  const prefix2 = 'prop';
  let i2 = 0;
  const obj2 = {
    [`${prefix2}-${++i2}`] : i2,
    [`${prefix2}-${++i2}`] : i2,
    [`${prefix2}-${++i2}`] : i2
  }
  console.log(obj2);


  var var1 = 1;

  if(true){
    var var2 = 2;
    if(true){
      var var3 = 3;
    }
  }
  function foo(){
    var var4 = 4;
    function bar(){
      var var5 = 5;
      console.log(var5);
    }
    console.log(var4);
    bar();
  }

  console.log(var1);
  console.log(var2);
  console.log(var3);
  foo();

var x = 'script';

function foo(){
  var x = 'java';
  return x;
}
console.log(foo(),x);

var i = 10;

for (var i =0; i<5; i++){
  console.log(i);
}
console.log(i);

var y = 'home';

function foo2(){
  console.log(y);
  var y = 'sweet';
}
foo2()
console.log(y);

console.log(v); // undefined

function outer(){
  console.log(v); // undefined
  function inner(){
    console.log(v); // undefined
    var v = 'inner';
    console.log(v); // inner
  }
  var v= 'outer';
  inner();
  console.log(v); // outer
}
outer();
var v = 'global';

