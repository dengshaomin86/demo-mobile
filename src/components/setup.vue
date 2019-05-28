<template>
  <div class="tl-con">
    <v-header>
      <h1>setup</h1>
    </v-header>

    <main>
      <ul class="list">
        <li>
          <p>声音</p>
          <v-btn :flag="voiceFlag" @click.native="voiceFlag=!voiceFlag"></v-btn>
        </li>
        <li>
          <p>主题</p>
          <select v-model="$store.state.theme">
            <option value="default">default</option>
            <option value="dark">dark</option>
          </select>
        </li>
      </ul>

    </main>

  </div>
</template>

<style scoped lang="scss">
  main {
    .list {
      padding: 0 $space;

      li {
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #000;
        @include border-color;

        p {
          @include fontSize(18);
        }

        select {
          border: none;
          outline: none;
          background-color: transparent;
          @include color;
        }
      }
    }
  }

</style>

<script>
  export default {
    name: "setup",
    methods: {
      pageInit() {
        this.clean();
      },

      clean() {
        Object.assign(this.$data, this.$options.data());
      },

    },
    data() {
      return {
        voiceFlag: false,
      }
    },
    mounted() {
    },
    activated() {
      this.pageInit();
    },
  }
</script>
