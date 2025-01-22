let count = 0;
let interval = null;
// 시작 상태 변수 (flag변수 : (on/off, true/false, 0/1) 저장)
let started = false; 

const span = document.querySelector('span');

const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', e => {
    pauseBtn.disabled = false;
    if (!started) {
        interval = setInterval(arg => {
            span.textContent = arg + count++;
        }, 1000, "time : ");
    }
});

const pauseBtn = document.querySelector('#pause');
pauseBtn.addEventListener('click', e => {
    // 시작상태가 아닌걸로 변경
    started = false;
    clearInterval(interval);
});

// clearInterval : setInterval 종료
const stopBtn = document.querySelector('#stop');
stopBtn.addEventListener('click', e => {
    // 시작상태가 아닌걸로 변경
    started = false;
    // 시작버튼, 퍼즈버튼 비활성화
    startBtn.disabled = true;
    pauseBtn.disabled = true;
    clearInterval(interval);
});