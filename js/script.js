let menu = document.querySelector('.menu');
let burger = document.querySelector('.burger');

burger.onclick = function () {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('active');//overflow: hidden;
}