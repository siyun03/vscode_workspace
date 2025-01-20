const url = 'https://jsonplaceholder.typicode.com/users';
const func = function(){
    fetch(url)
    .then(response => response.json()) // 응답 데이터를 JSON으로 변환
    .then(data => {
    const tbody = document.querySelector("table tbody");
      tbody.innerHTML = ""; // 기존 테이블 데이터 초기화

      // 데이터 반복 처리 후 테이블에 추가
    data.forEach(user => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.street}, ${user.address.city}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
        <td>${user.company.name}</td>
        `;
        tbody.appendChild(newRow); // 테이블에 새 줄 추가
    });
    })
    .catch(error => console.error('Error fetching data:', error));
};


// 버튼 클릭 시 서버에서 데이터 가져오기
document.getElementById('getAllUsers').addEventListener('click', function () {
    func();
});

document.getElementById('getUser').addEventListener('click', function(){
    func();
})