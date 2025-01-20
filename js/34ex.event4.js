// event 실습 4 : 성적처리 (동적 테이블 생성)
// 데이터 : 성명, 국어, 영어, 수학
// 기능 : 등록, 삭제, 개인총점, 과목총점

// const button = document.getElementById('update').addEventListener('click', e=>{

//     const name = document.getElementById('name')
//     const kor = document.getElementById('kor')
//     const eng = document.getElementById('eng')
//     const math = document.getElementById('math')
//     const 


// });

// 등록 버튼 클릭 이벤트 핸들러
document.getElementById("update").addEventListener("click", function () {
    // 입력 필드 값 가져오기
    const name = document.getElementById("name").value.trim();
    const kor = parseInt(document.getElementById("kor").value) || 0;
    const eng = parseInt(document.getElementById("eng").value) || 0;
    const math = parseInt(document.getElementById("math").value) || 0;

    // 입력값 유효성 검사
    if (!name || kor < 0 || eng < 0 || math < 0) {
        alert("올바른 정보를 입력해주세요.");
        return;
    }

    // 총점 계산
    const total = kor + eng + math;

    // 새로운 행 추가
    const tbody = document.querySelector("table tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${kor}</td>
        <td>${eng}</td>
        <td>${math}</td>
        <td>${total}</td>
        <td><button class="delete">삭제</button></td>
    `;

    tbody.appendChild(newRow);

    // 입력 필드 초기화
    document.getElementById("name").value = '';
    document.getElementById("kor").value = '';
    document.getElementById("eng").value = '';
    document.getElementById("math").value = '';
});

// 삭제 버튼 클릭 이벤트 핸들러
document.querySelector("table tbody").addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("delete")) {
        // 클릭된 버튼의 부모 행 제거
        const row = e.target.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
});

// tfoot의 삭제 버튼 핸들러 (모든 데이터 삭제)
document.getElementById("del").addEventListener("click", function () {
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = ''; // tbody 내용을 비움
});
