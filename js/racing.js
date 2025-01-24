const start = document.querySelector('#start');
const horse1 = document.querySelector('#horse1');
const horse2 = document.querySelector('#horse2');
const horse3 = document.querySelector('#horse3');
const horse4 = document.querySelector('#horse4');
const level = document.querySelector('#level');
const banner = document.querySelector('#banner');

console.log(banner.innerHTML);

let speedRate = 1.0;

let interval1 = null;
let interval2 = null;
let interval3 = null;
let intervalBanner = null;

window.onload = function() {
    horse1.style.left = '0px';
    horse2.style.left = '0px';
    horse3.style.left = '0px';
    horse4.style.left = '0px';
}
start.addEventListener('click', () => {
    banner.innerHTML = 3;
    start.disabled = true;
    new Promise((resolve, reject) => {
        resolve(intervalBanner = setInterval(bannerTimer,1000,banner.innerHTML));
    }).then(()=> {comStart();});
});

const run = function(horse) {
    const currLeft = parseInt(
        horse.style.left.substring(0, horse.style.left.length-2)
    );
    if (currLeft > 820) {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
    }
    const distance = Math.ceil(Math.random()*10*speedRate) + 3;
    horse.style.left = (currLeft+ distance) + 'px';
};

const comStart = () => {
    interval1 = setInterval(run, Math.ceil(Math.random()*50) + 100, horse1);
    interval2 = setInterval(run, Math.ceil(Math.random()*50) + 100, horse2);
    interval3 = setInterval(run, Math.ceil(Math.random()*50) + 100, horse3);
};

level.addEventListener('change', e => {
    switch (e.target.value) {
        case "easy" :
            speedRate = 1.0;
            break;
        case "normal" :
            speedRate = 1.5;
            break;
        case "hard" :
            speedRate = 2.0;
    }
});

document.addEventListener('keyup', e => {
    if (e.code === 'Space') {
        const horse4Left = parseInt(horse4.style.left.substring(0, horse4.style.left.length-2));
        if (horse4Left < 820) {
            horse4.style.left = ((horse4Left)+ 15) + 'px';
        }
    }
});

const bannerTimer = function() {
    if (banner.innerHTML > 1) {
        banner.innerHTML = banner.innerHTML-1;
    }
}

