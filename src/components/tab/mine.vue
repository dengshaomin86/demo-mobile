<template>
  <div class="tl-con mine-con">
    <header>
      <div class="avatar">
        <img src="../../assets/images/logo/logo.png">
      </div>
      <div class="info">
        <p class="name">USER</p>
        <p class="signature">Everyday happy ヽ(￣▽￣)ﾉ</p>
      </div>
    </header>

    <div class="tl-main">
      <ul class="list">
        <router-link tag="li" :to="item" v-for="(item, idx) in list" :key="idx">{{item}}</router-link>
      </ul>

      <button class="btn">退出</button>
    </div>

  </div>
</template>

<style scoped lang="scss">
  .mine-con {
    display: flex;
    flex-direction: column;

    header {
      @include bg-panel;
      padding: $space;
      display: flex;
      align-items: center;

      .avatar {
        width: 1.6rem;
        height: 1.6rem;
        margin-right: $space;

        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }

      .info {
        .name {
          @include fontSize(18);
          @include active-color;
        }

        .signature {
          margin-top: 0.1rem;
        }
      }
    }

    .tl-main {
      .list {
        li {
          cursor: pointer;
          line-height: 1rem;
          margin-left: 0.5rem;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #000;
          @include border-color;

          .fa {
            position: relative;
            top: 0;
            left: 0;
          }
        }
      }

      .btn {
        margin: 1rem auto;
        display: block;
        width: 8rem;
        height: 1.2rem;
        @include bg-btn;
      }
    }
  }

</style>

<script>
  export default {
    name: "mine",
    methods: {},
    data() {
      return {
        list: [
          'setup',
          'translate',
          'indexedDB',
          'share',
          'imgLoad',
          'BMap',
          'transform',
          'loadingStyle',
          'computed',
          'svg',
          'friends',
          'ws',
          'font',
          'touch',
          'grid',
          'canvas',
          'scroll',
        ],
      }
    },
    mounted() {
    },
    activated() {
    },
  }
</script>
