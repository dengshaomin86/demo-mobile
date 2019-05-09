<template>
    <div class="tl-con">
        <v-header>
            <h1>setup</h1>
        </v-header>

        <main>
            <ul class="list">
                <li>
                    <p>声音</p>
                    <v-btn :flag="flag" @click.native="flag=!flag"></v-btn>
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
                flag: false,
            }
        },
        mounted() {
        },
        activated() {
            this.pageInit();
        },
    }
</script>
