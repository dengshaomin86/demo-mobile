<template>
  <div id="app" :data-theme="'theme-'+$store.state.theme">
    <transition :name="transition">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<style scoped lang="scss">
  #app {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
</style>

<script>
  export default {
    name: 'app',
    methods: {
      calcRem() {
        let $html = $('html');
        let size = $html.width() / 10 + "px";
        $html.css("font-size", size);
        $(window).on("resize", function () {
          let size = $html.width() / 10 + "px";
          $html.css("font-size", size)
        });
      },
    },
    data() {
      return {}
    },
    mounted() {
      this.calcRem();
    },
  }
</script>
