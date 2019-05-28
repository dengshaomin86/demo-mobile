<template>
  <div class="tl-con">
    <v-header>
      <h1>store</h1>
    </v-header>

    <main>
      <ul class="list">
        <li>
          <p>number</p>
          <p>{{$store.state.number}}</p>
        </li>
        <li>
          <p>this.number</p>
          <p>{{number}}</p>
        </li>
        <li>
          <p>this.number2</p>
          <p>{{number2}}</p>
        </li>
        <li>
          <p>this.number3</p>
          <p>{{number3}}</p>
        </li>
        <li>
          <p>this.number4</p>
          <p>{{number4}}</p>
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
      }
    }
  }

</style>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    name: "setup",
    methods: {
      ...mapMutations([
        'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

        // `mapMutations` 也支持载荷：
        'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
      ]),
      ...mapMutations({
        add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
      }),

      ...mapActions([
        'setNumber', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

        // `mapActions` 也支持载荷：
        'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
      ]),
      ...mapActions({
        add: 'setNumber' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
      }),

      pageInit() {
        this.clean();
      },

      clean() {
        Object.assign(this.$data, this.$options.data());
        this.setNumber({amount: 10});
        this.add({amount: 20});
      },

    },
    computed: {
      ...mapState([
        'number',
      ]),
      ...mapState({
        number2: 'number',
        number3: (state) => state.number,
        number4: function (state) {
          return state.number + 11
        },
      }),
    },
    data() {
      return {}
    },
    mounted() {
    },
    activated() {
      this.pageInit();
    },
  }
</script>
