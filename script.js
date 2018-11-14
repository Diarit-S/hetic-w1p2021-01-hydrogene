var nav = document.getElementById('nav');
var open = document.getElementById('open');

open.addEventListener('click', function() {
  nav.classList.toggle('is-open');
});



var menu2 = document.getElementById('menu2');
var product = document.getElementById('product');

product.addEventListener('click', function() {
  menu2.classList.toggle('is-open');
});


var menu3 = document.getElementById('menu3');
var press = document.getElementById('press');

press.addEventListener('click', function() {
  menu3.classList.toggle('is-open');
});


