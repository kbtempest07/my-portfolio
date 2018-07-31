<template>
  <header>
    <div class="menu-btn">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu">
      <div class="menu-branding">
        <div class="portrait">

        </div>
      </div>
      <ul class="menu-nav">
        <li class="nav-item current">
          <router-link to="/" class="nav-link">Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">ABOUT ME
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/my-works" class="nav-link">MY WORK
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">HoW TO REACH ME
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import { domEvents } from '@/services/domService';
  export default {
    mounted() {
      const menuBtn = document.querySelector('.menu-btn');
      menuBtn.addEventListener('click', domEvents.toggleMenu);
    },
  }
</script>
