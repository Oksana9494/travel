let i = 1;
for(let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}




let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let count = carousel.offsetWidth / 236;
let width = 0;
let position = 0;
let carouselWidth = carousel.offsetWidth;


let carouselDots = document.querySelectorAll('.dots-item'); //кружочки
let carouselIndex = 0;


function carouselMove(up) {
      carouselDots[carouselIndex].classList.remove('dots-item_active');
      carouselIndex=(carouselIndex + up + listElems.length)% listElems.length;
      carouselDots[carouselIndex].classList.add('dots-item_active');
      width=0;
      for(var i=0;i < carouselIndex;i++) {
          width +=listElems[i].offsetWidth * count;
      }
      list.style.marginLeft = (width * -1) + 'px';
}
function dotMove(i) {
     carouselMove(i - carouselIndex);
}
  

[...carouselDots].forEach((dot, i) => dot.addEventListener('click', dotMove.bind(dot, i)));
[...carouselDots].forEach((dot, i) => dot.addEventListener('touchmove', dotMove.bind(dot, i)));