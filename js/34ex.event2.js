// event실습 2 : 배경색 변경
// outer 클릭시 배경색상 임의색상으로 변경
// inner 클릭시 outer, inner. 배경색상 임의색상으로 변경
// button 클릭시 btn, outer, inner 배경색 임의색상으로 변경

const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('btn');

const colorMix = function() {
    return `rgb(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)}
    )`
}

// outer.addEventListener('click',()=>{
//     outer.style.backgroundColor = colorMix();

// });

// inner.addEventListener('click', ()=>{
//     inner.style.backgroundColor = colorMix();
// });


// button.addEventListener('click', ()=>{
//     button.style.backgroundColor = colorMix();
// });

//
outer.addEventListener('click', event =>{
    const prevInnerBackgroundColor
    = inner.style.backgroundColor ?
    inner.style.backgroundColor : 'rgb(1,2,3)';

    switch(event.target.id){
        case 'outer':
            outer.style.backgroundColor = colorMix();
            inner.style.backgroundColor = prevInnerBackgroundColor;
            break;
        case 'inner' :
            inner.style.backgroundColor = colorMix();
            outer.style.backgroundColor = colorMix();
            break;
        case 'btn' :
            button.style.backgroundColor = colorMix();
            inner.style.backgroundColor = colorMix();
            outer.style.backgroundColor = colorMix();

    }


});





