// // select Dom elements
// const menuBtn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu');
// const menuNav = document.querySelector('.menu-nav');
// const menuBranding = document.querySelector('.menu-branding');
//
// const navItems = document.querySelectorAll('.nav-item');
//
// // set initial state of the menu
// let showMenu = false;
//
// menuBtn.addEventListener('click', toggleMenu);
// console.log('MAin.js');
// function toggleMenu() {
//   console.log('TOggloe menu was called ');
//   if (!showMenu) {
//     menuBtn.classList.add('close');
//     menu.classList.add('show');
//     menuNav.classList.add('show');
//     menuBranding.classList.add('show');
//     navItems.forEach(item => item.classList.add('show'));
//     // reset menu states
//     showMenu = true;
//   } else {
//     menuBtn.classList.remove('close');
//     menu.classList.remove('show');
//     menuNav.classList.remove('show');
//     menuBranding.classList.remove('show');
//     navItems.forEach(item => item.classList.remove('show'));
//     // reset menu states
//     showMenu = false;
//   }
// }
