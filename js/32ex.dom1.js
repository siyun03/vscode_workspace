// 추가버튼을 누르면 리스트에 아이템을 추가
// 제거 버튼을 누르면 리스트에서 아이템 제거
// 초기화 버튼을 누르면 리스트 모든 아이템 제거

const puls = document.getElementById('plus');
const  minus = document.getElementById('minus');
const  delet = document.getElementById('delete');
const list = document.getElementById('list');

document.getElementById('plus').addEventListener('click', ()=>{
    const puls = document.createElement('li');
    puls.textContent = 'Item';
    list.appendChild(puls);
})

document.getElementById('minus').addEventListener('click', ()=>{
    const bbagi = list.querySelector('li');
    list.removeChild(bbagi);
})

document.getElementById('delete').addEventListener('click', ()=>{
    list.textContent='';
})










