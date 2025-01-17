// event 실습 1 : 숫자 카운터 
const counter = document.getElementById('counter');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.addEventListener('click', ()=>{
    counter.value = parseInt(counter.value)+1;
});
decrease.addEventListener('click', ()=>{
    counter.value = parseInt(counter.value)-1;
});

// 실습 1-1 안에 채팅 못치게
counter.addEventListener('focus', ()=>{
    alert('노따취')
    counter.blur();
});
















