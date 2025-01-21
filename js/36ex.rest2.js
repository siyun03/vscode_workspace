/*
    [REST API 실습]
    1. JSON 서버 구동
    2. 기능
        (1) 데이터가져오기 버튼 누르면 테이블 전체 데이터 표시 
            > GET, /persons 호출하여 테이블에 표시
        (2) id, name, age 입력하고 등록버튼 클릭하면 테이블에 데이터 추가
            > POST, /persons
        (3) 각 행의 데이터를 수정하고 수정버튼 누르면 "수정하시겠습니까?" 확인 후 데이터 수정
            > PUT, /persons/아이디
        (4) 각 행의 삭제버튼 누르면 "삭제하시겠습니까?" 확인 후 데이터 삭제
            > DELETE, /persons/아이디
*/

const xhr = new XMLHttpRequest();
const tbody = document.getElementById('tbody');

const renderTable = (data) => {
    tbody.innerHTML = ''; // 테이블 초기화
    data.forEach(function(user) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><input value="${user.id}" type="text"></td>
            <td><input value="${user.name}" type="text"></td>
            <td><input value="${user.age}" type="text"></td>
            <td><button>수정</button>&nbsp;
                    <button>삭제</button></td>
        `;
        tbody.appendChild(row);
    });
};
const getxhr = document.getElementById('listPerson').addEventListener('click', e =>{
    // list : Request Method : GET방식 요청, URL:/persons 
    xhr.open('GET', 'http://localhost:7777/persons');
    // GET일 때는 보내는 데이터가 없으므로 sent()
    xhr.send();
    xhr.onload = () => {
    if (xhr.status == 200 || xhr.status == 201){
        const parse = JSON.parse(xhr.response); // 데이터를 JSON으로 파싱
        document.querySelector('#tbody').innerHTML= '';
        renderTable(parse); // 테이블 렌더링 함수 호출
        }else {
        console.log('에러발생', xhr.status, xhr.statusText);
        }
    };
})

// (2) id, name, age 입력하고 등록버튼 클릭하면 테이블에 데이터 추가
//     > POST, /persons

const postxhr = document.getElementById('registPerson').addEventListener('click', e=>{
    
    const id = document.querySelector('.pid').value;
    const name = document.querySelector('.pname').value;
    const age = document.querySelector('.page').value;
    
    const postData = {
        id: id,
        name: name,
        age: age
    };

    xhr.open('POST', 'http://localhost:7777/persons');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(postData));
    xhr.onload = () => {
        if (xhr.status == 200 || xhr.status == 201){
            const parse = JSON.parse(xhr.response); // 데이터를 JSON으로 파싱
            document.querySelector('#tbody').innerHTML= '';
            renderTable(parse); // 테이블 렌더링 함수 호출
        }else {
            console.log('에러발생', xhr.status, xhr.statusText);
        }
    };
})

// (3) 각 행의 데이터를 수정하고 수정버튼 누르면 "수정하시겠습니까?" 확인 후 데이터 수정
// > PUT, /persons/아이디
const putxhr = document.getElementById('sujung').addEventListener('click',e => {   
    const pid = e.target.getAttribute('data-id'); // 버튼에 저장된 'data-id'에서 pid 값을 가져옴
    modifyPerson(pid);  // pid를 전달하여 수정 진행
});
const modifyPerson = pid => {
    const confirm = window.confirm('수정하시겠습니까?');
    if (!confirm) return;

    const id = document.querySelector('.pid').value;
    const name = document.querySelector('.pname').value;
    const age = document.querySelector('.page').value;
    
        xhr.open('PUT', `http://localhost:7777/persons/${pid}`); 
        xhr.send(JSON.stringify({id: id, name: name, age: age}));
        xhr.onload = () => {
            if (xhr.status == 200){
            renderTable(); // 테이블 렌더링 함수 호출
            }else {
                console.log('에러발생', xhr.status, xhr.statusText);
            }
        };
        
    };





// (4) 각 행의 삭제버튼 누르면 "삭제하시겠습니까?" 확인 후 데이터 삭제
// > DELETE, /persons/아이디

