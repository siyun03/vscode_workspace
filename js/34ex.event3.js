const uid = document.getElementById('uid');
const upass = document.getElementById('upass');
const gender = document.getElementById('gender');
const game = document.getElementById('game');
const tube = document.getElementById('tube');
const book = document.getElementById('book');
const sleep = document.getElementById('sleep');
// event 실습 3 : 압력필드 검증 (validation)
// 전송버튼을 클릭하면
// 1. 아이디, 비밀번호는 12자 이하
// 2. 성별은 필수체크
// 3. 취미는 2개 이상 선택
// 조건을 모두 만족하면 '폼이 전송되었습니다' 앨럿
// 그렇지 않으면 해당 폼에 포커스
// 초기화버튼 클릭하면 폼 초기화
const form = document.querySelector('form[name="writeForm"]');

document.getElementById("submit").addEventListener('click', e=>{
    const uid = document.querySelector('input[name="uid"]');
    if (uid.value.length > 12){
        alert('ID 12자 이하로 작성');
        uid.focus();
    }
    const upass = document.querySelector('input[name="upass"]');
    if (upass.value.length > 12){
        alert('PW 12자 이하로 작성');
        upass.focus();
    }

    const gender = document.querySelector('input[type="radio"]:checked');
    if(!gender){
        alert('성별을 입력해주세요');
        return false;
    }

    const hobby = document.querySelectorAll('input[type="checkbox"]');
    let checkcount = 0;
    hobby.forEach(hobby =>{
        if(hobby.checked) checkcount ++;
    });
    if(checkcount < 2){
        alert('취미 2개 이상 선택');
        return false;
    }

        form.reset();
    });


    
    
































