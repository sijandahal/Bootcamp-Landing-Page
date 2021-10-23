var navbar = document.querySelector('.nav--ul');
var button = document.querySelector('.nav--items');
var ul = document.querySelector('.mobile-submenu-item');
// var mobileUl = document.querySelector('.mobile-menu--nav > ul');

// mobileUl.addEventListener('click', function(e) {
//   if(e.target.classList.contains('mobile--links')) {
//     const arrowMobile = e.target.children;
//   }
// })



//open close toggle
var menu = document.querySelector('.burger');
var overlay = document.querySelector('.overlay');
menu.addEventListener('click', function() {
  menu.classList.toggle('open');
  overlay.classList.toggle('visible');
  document.body.classList.toggle('open-nav')
  document.querySelector('.mobile-menu--nav').classList.toggle('open');
}) 

//accordion

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));