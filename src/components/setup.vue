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
                    <p>夜间</p>
                    <v-btn :flag="nightFlag" @click.native="nightFlag=!nightFlag"></v-btn>
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
                border-bottom: 1px solid $border;

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
                'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

                // `mapActions` 也支持载荷：
                'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
            ]),
            ...mapActions({
                add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
            }),

            pageInit() {
                this.clean();
            },

            clean() {
                Object.assign(this.$data, this.$options.data());
                console.log(this.$store);
            },

        },
        data() {
            return {
                voiceFlag: false,
                nightFlag: false,
            }
        },
        mounted() {
        },
        activated() {
            this.pageInit();
        },
    }
</script>
