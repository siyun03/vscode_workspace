//  요소 선택
const mainTitle = document.getElementById('main-title');
const description = document.getElementById('description');
const list = document.getElementById('list');

// 노드 프라퍼티
// 1. 요소노드인 경우
console.log('노드 타입 : ', mainTitle.nodeType);
console.log('노드 이름 : ', mainTitle.nodeName);
console.log('노드 값 : ', mainTitle.nodeValue);

// 2. 텍스트노트인 경우
console.log('노드 타입 : ', description.firstChild.nodeType);
console.log('노드 이름 : ', description.firstChild.nodeName);
console.log('노드 값 : ', description.firstChild.nodeValue);

// 3. 문서노드인 경우
console.log('노드 타입 : ', document.nodeType);
console.log('노드 이름 : ', document.nodeName);
console.log('노드 값 : ', document.nodeValue);

// 4. 속성노드인 경우
console.log('노드 타입 : ', mainTitle.attributes['id'].nodeType);
console.log('노드 이름 : ', mainTitle.attributes['id'].nodeName);
console.log('노드 값 : ', mainTitle.attributes['id'].nodeValue);

// 컨텐츠 조작
console.log('textContent : ', mainTitle.textContent);
mainTitle.textContent = '수정된 textContent' ;
console.log('textContent : ', mainTitle.textContent);

console.log('innerHTML : ', list.innerHTML);
list.innerHTML += "<li data-id='4' data-name='Item4'>Item 4</li>";
console.log('innerHTML : ', list.innerHTML);

// 요소의 속성들
// NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
console.log('attributes : ', mainTitle.attributes); 
// title
console.log('className : ', mainTitle.className);
// DOMTokenList ['title', value: 'title'] 0: "title"length: 1value: "title"
console.log('classList : ', mainTitle.classList);

mainTitle.classList.add('highlight');
console.log('classList : ', mainTitle.classList);

// 요소의 데이터 속성들
const firstItem = list.querySelector("li[data-id = '1']");
console.log('data-id : ', firstItem.dataset.id); // data-id :  1
console.log('data-name : ', firstItem.dataset.name); // data-name :  Item

// 요소 생성 및 추가
const newItem = document.createElement('li');
newItem.textContent = 'Item 5';
newItem.dataset.id = '5';
newItem.dataset.name = 'Item5';
list.appendChild(newItem);

// DocumentFragment : 독립된 문서객체 (DOM 트리를 벗어난 새로운 DOM), 직독직해 : 문서조각
const fragment = document.createDocumentFragment();
for(let i=0; i<=8; i++){
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    li.dataset.id = `${i}`;
    li.dataset.name = `Item${i}`;
    fragment.appendChild(li);
}
list.appendChild(fragment);

// 요소 삭제 및 대체
const secondItem = list.querySelector('li[data-id="2"]');
list.removeChild(secondItem);

const thirdItem = list.querySelector('li[data-id="3"]');
const replacement = document.createElement('li');
replacement.textContent = '수정된 아이템';
replacement.dataset.id = '3';
replacement.dataset.name = '수정된 아이템';
list.replaceChild(replacement, thirdItem);

// 속성 조작
console.log('id속성 존재 여부 : ', mainTitle.hasAttribute('id'));

// setAttribute : 속성이 없으면 생성, 있으면 변경
mainTitle.setAttribute('data-example', 'demo');

// getAttribute : 속성값 획득
console.log(mainTitle.getAttribute('data-example'));

// 스타일링 
mainTitle.style.color = 'white';
mainTitle.style.fontSize = '30px'; // CSS : font-size, JS : fontSize

// 스타일 정보 획득 : window.getComputedStyle
console.log('computed style : ', getComputedStyle(mainTitle));
console.log('computed style : ', getComputedStyle(mainTitle).color);

