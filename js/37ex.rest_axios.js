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
const request = {
    get(url) {
        return fetch(url);
    },
    post(url, payload) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(payload)
        });
    },
    put(url, payload) {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    },
    patch(url, payload) {
        return fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    },
    delete(url) {
        return fetch(url, {
            method: 'DELETE'
        });
    },
};

listPerson.addEventListener('click', e => {
    request.get('http://localhost:7777/persons')
        .then(response => response.json())
        .then(persons => {
            // 테이블 초기화
            tbody.innerHTML = '';
            // 데이터를 테이블에 추가
            persons.forEach(person => {
                const row = `
                    <tr>
                    <td>${person.id}</td>
                    <td><input id="name${person.id}" type="text" value="${person.name}" class="pname"></td>
                    <td><input id="age${person.id}" type="text" value="${person.age}" class="page"></td>
                    <td>
                    <button onclick="modifyPerson('${person.id}');">수정</button>&nbsp;
                    <button onclick="deletePerson('${person.id}');">삭제</button>
                    </td>
                    </tr>
                    `;
                tbody.insertAdjacentHTML('beforeend', row);
            });
        })
        .catch(err => console.error(err));
});

registPerson.addEventListener('click', e => {
    request.post('http://localhost:7777/persons', {
        id: pid.value, name: pname.value, age: page.value
    })
    .then(response => response.json())
    .then(persons => {
        tbody.innerHTML = '';
        // 데이터를 테이블에 추가
        persons.forEach(person => {
            const row = `
                <tr>
                <td>${person.id}</td>
                <td><input id="name${person.id}" type="text" value="${person.name}" class="pname"></td>
                <td><input id="age${person.id}" type="text" value="${person.age}" class="page"></td>
                <td>
                <button onclick="modifyPerson('${person.id}');">수정</button>&nbsp;
                <button onclick="deletePerson('${person.id}');">삭제</button>
                </td>
                </tr>
                `;
            tbody.insertAdjacentHTML('beforeend', row);
        });
    })
    .catch(err => console.error(err))
});

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







