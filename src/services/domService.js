import Vue from 'vue';

export const domEvents = new Vue({
  data: {
    menuBtn: document.querySelector('.menu-btn'),
    menu: document.querySelector('.menu'),
    menuNav: document.querySelector('.menu-nav'),
    menuBranding: document.querySelector('.menu-branding'),
    navItems: document.querySelectorAll('.nav-item'),
    showMenu: true,
  },
  methods: {
    toggleMenu() {
      const menuBtn = document.querySelector('.menu-btn');
      const menu = document.querySelector('.menu');
      const menuNav = document.querySelector('.menu-nav');
      const menuBranding = document.querySelector('.menu-branding');
      const navItems = document.querySelectorAll('.nav-item');

      console.log('TOggle menu was called ');
      console.log('this.showMenu ',this.showMenu);
      if (!this.showMenu) {
        if (menuBtn && menu && menuNav && menuBranding && navItems) {
          menuBtn.classList.add('close');
          menu.classList.add('show');
          menuNav.classList.add('show');
          menuBranding.classList.add('show');
          navItems.forEach(item => item.classList.add('show'));
        }
        // reset menu states
        this.showMenu = true;
      } else {
        if (menuBtn && menu && menuNav && menuBranding && navItems) {
          menuBtn.classList.remove('close');
          menu.classList.remove('show');
          menuNav.classList.remove('show');
          menuBranding.classList.remove('show');
          navItems.forEach(item => item.classList.remove('show'));
        }
        this.showMenu = false;
      }
    }
  }
  });
