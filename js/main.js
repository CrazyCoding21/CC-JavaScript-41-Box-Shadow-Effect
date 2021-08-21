const square = document.querySelector('.square-box');
const circle = document.querySelector('.circle-box');
let shadow = '';

for(var i = 0; i < 500; i++){
    shadow += (shadow ? ',' : '') + i*1+'px ' + i*1+'px 0 #751475';
}

square.style.boxShadow = shadow;
circle.style.boxShadow = shadow;
