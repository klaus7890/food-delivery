const menu = document.getElementById('menu');
 
 const nav = document.getElementById('nav');
 
 menu.addEventListener('toggle', openNav);
 
 function openNav() {
   console.log('i clicked you');
   nav.classList.toggle('show');
 }