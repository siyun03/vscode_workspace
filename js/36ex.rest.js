/*
    [REST API 실습]
    1. JSON서버 구동
    2. 기능
    (1) 데이터가져오기버튼 누르면 테이블에 전체 데이터 표시
        > GET, /persons
    (2) id, name, age 입력하고 등록버튼 클릭하면 테이블에 데이터 추가
        > POST, /persons
    (3) 각 행의 데이터를 수정하고 수정버튼 누르면 "수정하시겠습니까?" 확인 후
        데이터 수정
        > PUT, /persons/아이디
    (4) 각 행의 삭제버튼 누르면 "삭제하시겠습니까?" 확인 후 데이터 삭제
        > DELETE, /persons/아이디
*/

const listPerson = document.querySelector('#listPerson');
const getPerson = document.querySelector('#getPerson');
const pid = document.querySelector('#pid');
const pname = document.querySelector('#pname');
const page = document.querySelector('#page');
const registPerson = document.querySelector('#registPerson');
const tbody = document.querySelector('tbody');
const sel = document.querySelector('#sel');
const asc = document.querySelector('#asc');
const desc = document.querySelector('#desc');

let responseArr = null; // 배열 담을 객체 생성

listPerson.addEventListener('click', e => { // 전체데이터 가져오기 > 마우스 클릭 시 실행
    const xhr = new XMLHttpRequest(); // XHR 객체 생성 
    xhr.open('GET', 'http://localhost:7777/persons'); // GET을 할 url 입력하고, 요청 초기화
    xhr.send(); // 요청 전송 메서드
    xhr.onload = () => { // 요청 성공 시 콜백함수 저장할 프라퍼티
        responseArr = JSON.parse(xhr.response); // 성공시 배열에 json문자열 응답몸체를 담음
        printList(responseArr); // 테이블에 데이터를 출력하는 기능
    };
});

getPerson.addEventListener('click', e => {
    const xhr = new XMLHttpRequest();
    const sid = document.querySelector('#sid');
    if (!sid.value) { //아이디 값을 입력하지 않을 경우
        alert('검색하실 아이디를 입력해 주시랑께요!'); // 출력
        sid.focus(); // sid를 포커스
        return;
    }
    xhr.open('GET', `http://localhost:7777/persons/${sid.value}`);
    xhr.send();
    xhr.onload = () => {
        tbody.textContent = ''; // tbody의 텍스트콘텐츠 설정
        // onload 요청 성공 시 추가할 HTML
        const person = JSON.parse(xhr.response);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${person.id}</td>
            <td><input id="name${person.id}" type="text" value="${person.name}" class="pname"></td>
            <td><input id="age${person.id}" type="text" value="${person.age}" class="page"></td>
            <td>
                <button onclick="modifyPerson('${person.id}');">수정</button>&nbsp;
                <button onclick="deletePerson('${person.id}');">삭제</button>
            </td>
        `;
        tbody.appendChild(tr); 
    };
});

registPerson.addEventListener('click', e => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:7777/persons');
    // 서버에 보내는 데이터가 JSON 형식임을 나타냄
    // 요청 헤더에 Content-Type을 application/json으로 설정
    // Content-Type을 application/json으로 설정 이후에 서버로 보내는 데이터가 JSON으로 직렬화되어 전송
    // 요청 본문에 담긴 데이터가 JSON 형태로 전송될 것임을 서버에 알려주는 설정
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(
        {"id": pid.value, "name": pname.value, "age": page.value} 
        // 값을 포함하는 객체를 json문자열로 변환하여 서버로 보냄
    ));
    xhr.onload = () => {
        printList(responseArr);
    };
});

asc.addEventListener('click', () => {
    printList(responseArr, sel.value, 'ASC')
});

desc.addEventListener('click', () => {
    printList(responseArr, sel.value, 'DESC')
});
// printList라는 함수가 responseArr 배열을 특정 기준에 따라 정렬하는 기능을 수행
const printList = (responseArr, selValue, sort) => {
    if (selValue) { // 정렬 기준이 존재하는지 확인 > 정렬 기준은 sel.Value에 따라 다름
        if (typeof selValue === 'number') { // selValue가 숫자라면
            responseArr.sort((obj1, obj2) => { // 정렬
                if (sort==='ASC') {
                    return obj1[selValue] - obj2[selValue];
                } else if (sort==='DESC') {
                    return obj2[selValue] - obj1[selValue];
                }
            });
        } else { // 문자열 정렬
            responseArr.sort((obj1, obj2) => {
                if (sort==='ASC') { 
                    return obj1[selValue].localeCompare(obj2[selValue]);
                } else if (sort==='DESC') {
                    return obj2[selValue].localeCompare(obj1[selValue]);
                }
            });
        }
    }
    tbody.textContent = '';    
    for (let obj of responseArr) { // responseArr 배열을 반복문을 사용해 하나씩 순회
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${obj.id}</td>
            <td><input id="name${obj.id}" type="text" value="${obj.name}" class="pname"></td>
            <td><input id="age${obj.id}" type="text" value="${obj.age}" class="page"></td>
            <td>
                <button onclick="modifyPerson('${obj.id}');">수정</button>&nbsp;
                <button onclick="deletePerson('${obj.id}');">삭제</button>
            </td>
        `;
        tbody.appendChild(tr);    
    }    
};
//modifyPerson은 특정 사용자의 정보를 수정하는 함수 pid는 수정할 대상 사용자의 ID를 의미
const modifyPerson = pid => { 
    const confirm = window.confirm('수정하시겠습니까?'); // 확인창 띄우기
    if (!confirm) return; // 확인을 누르지 않으면 실행되지 않고 종료
    const pname = document.querySelector('#name'+pid).value;
    const page = document.querySelector('#age'+pid).value; //수정할 input 필드를 찾아 그 값을 가져옴
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', `http://localhost:7777/persons/${pid}`);
    xhr.setRequestHeader('content-type', 'application/json'); // 서버에 json형식으로 보냄
    xhr.send(JSON.stringify({"id":pid, "name":pname, "age":page})); 
    //요청이 완료되면(xhr.onload), printList 함수를 호출하여 테이블에 수정된 데이터를 다시 렌더링
    xhr.onload = () => {
        printList(responseArr);
    };    
}

const deletePerson = pid => {
    const confirm = window.confirm('삭제하시겠습니까?');
    if (!confirm) return;
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `http://localhost:7777/persons/${pid}`);
    xhr.send();
    xhr.onload = () => {
        printList(responseArr);
    };    
}
// 특정 버튼(또는 다른 HTML 요소)을 프로그램matically 클릭하는 기능
// 사용자가 데이터를 삭제한 후, 자동으로 "데이터 가져오기" 버튼을 클릭한 것처럼 동작하게 함
listPerson.click();