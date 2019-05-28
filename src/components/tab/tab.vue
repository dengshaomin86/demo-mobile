<template>
  <div class="tl-con tab-con">
    <div class="tab-main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <ul class="tab">
      <router-link tag="li" to="/index">首页</router-link>
      <router-link tag="li" to="/mine">我的</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "tab"
  }
</script>

<style scoped lang="scss">
  .tab-con {
    display: flex;
    flex-direction: column;

    .tab-main {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
    }

    .tab {
      flex: 0 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      @include bg-panel;
      border-top: 1px solid #000;
      @include border-color;

      li {
        &.router-link-exact-active {
          @include active-color;
        }
      }
    }
  }
</style>
