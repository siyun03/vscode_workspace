// 사용자 데이터 저장을 위한 전역 변수
let userData = []; // 'var'를 'let'으로 변경 (배열 내용 변경 가능)

// URL 설정
const url = 'https://jsonplaceholder.typicode.com/users'; // URL은 변경되지 않으므로 const 사용

// 테이블에 데이터를 출력하는 함수
function renderTable(data) {
    const tbody = document.querySelector("table tbody"); // tbody는 테이블 내에서 반복적으로 사용되므로 const로 선언
    tbody.innerHTML = ""; // 기존 테이블 데이터 초기화

    // 각 사용자를 테이블에 추가
    data.forEach(function(user) {
        const row = document.createElement("tr"); // 새로운 행을 생성할 때마다 const로 선언
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.street}, ${user.address.city}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
            <td>${user.company.name}</td>
        `;
        tbody.appendChild(row); // 테이블에 행 추가
    });
}

// 모든 사용자 데이터를 가져오는 함수
function fetchUsers() {
    const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체는 변경되지 않으므로 const 사용
    xhr.open("GET", url, true); // 요청을 초기화

    xhr.onload = function () {
        if (xhr.status === 200) {
            userData = JSON.parse(xhr.responseText); // 데이터를 전역 변수에 저장 (배열을 변경할 수 있으므로 let 사용)
            renderTable(userData); // 테이블 렌더링
        } else {
            console.error("사용자 데이터를 가져오는 중 오류 발생");
        }
    };

    xhr.send(); // 요청 전송
}

// 특정 사용자 데이터를 가져오는 함수
function fetchUserById(userId) {
    const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체는 변경되지 않으므로 const 사용
    xhr.open("GET", `${url}/${userId}`, true); // 특정 사용자에 대한 요청

    xhr.onload = function () {
        if (xhr.status === 200) {
            const user = JSON.parse(xhr.responseText); // 응답을 객체로 변환
            renderTable([user]); // 특정 사용자만 렌더링
        } else {
            const tbody = document.querySelector("table tbody"); // tbody는 변경되지 않으므로 const 사용
            tbody.innerHTML = "<tr><td colspan='8'>사용자를 찾을 수 없습니다.</td></tr>";
        }
    };

    xhr.send(); // 요청 전송
}

// 오름차순 정렬 함수
function sortAscending() {
    const sortedData = userData.slice().sort(function (a, b) { return a.id - b.id; });
    renderTable(sortedData); // 정렬된 데이터로 테이블 렌더링
}

// 내림차순 정렬 함수
function sortDescending() {
    const sortedData = userData.slice().sort(function (a, b) { return b.id - a.id; });
    renderTable(sortedData); // 정렬된 데이터로 테이블 렌더링
}

// 버튼 이벤트 연결
document.getElementById("getAllUsers").addEventListener("click", function () {
    fetchUsers(); // 모든 사용자 데이터를 가져오기
});

document.getElementById("getUser").addEventListener("click", function () {
    const userIdInput = document.getElementById("userId");
    const userId = userIdInput.value.trim(); // 입력된 ID 값 가져오기

    // if (userId) {
        fetchUserById(userId); // 특정 사용자 데이터를 가져오기
    // } else {
    //     alert("사용자 ID를 입력하세요.");
    // }
});

document.getElementById("asc").addEventListener("click", function () {
    sortAscending(); // 오름차순 정렬
});

document.getElementById("desc").addEventListener("click", function () {
    sortDescending(); // 내림차순 정렬
});
