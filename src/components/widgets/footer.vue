<template>
  <footer id="main-footer" :style="atHomePag()">
    Copyright &copy; {{year}}
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        year : new Date().getFullYear(),
      };
    },
    methods: {
      atHomePag() {
        if (this.$route.name === 'Home') {
          return 'position: fixed; width:100%;';
        }
        return '';
      }
    }
  }
</script>
