var nav = document.getElementById('nav');
var open = document.getElementById('open');

open.addEventListener('click', function() {
  nav.classList.toggle('is-open');
});



var item = document.getElementById('item');
var item2 = document.getElementById('item2');

item.addEventListener('click', function() {
	item2.classListe.toggle('item-is-open');
});