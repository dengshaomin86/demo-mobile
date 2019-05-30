<template>
  <div id="app" :data-theme="'theme-'+$store.getters.theme">
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
  }
</script>
