<template>
  <div id="app">
    <div id="main-body">
      <nav-tab>
      </nav-tab>
      <router-view/>
    </div>
    <custom-footer>
    </custom-footer>
  </div>
</template>

<script>
  import navTab from '@/components/widgets/navTab';
  import customFooter from '@/components/widgets/footer';
  export default {
    name: 'App',
    components: {
      navTab,
      customFooter
    },
}
</script>


<style lang="sass">
$home-image: url(../static/img/background.jpg);
$portrait-normal: url(../static/img/portrait.jpg)
$portrait-small: url(../static/img/portrait-small.jpeg)
$primary-color: #444;
$secondary-color: #eece1a;
$show-home-image: true;
$background-opacity: 0.9;

@import 'static/scss/main'

</style>
