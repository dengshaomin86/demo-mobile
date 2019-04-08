<template>
    <div class="tl-con">
        <v-header>
            <h1>friends</h1>
        </v-header>

        <main>
            <ul class="list">
                <router-link tag="li" :to="{path:'/ws',query:{id:item.id}}" v-for="(item,idx) in list" :key="idx">{{item.name}}</router-link>
            </ul>
        </main>

    </div>
</template>

<style scoped lang="scss">
    .list {
        padding: 15px;
        margin: 15px;
        li {
            font-size: 16px;
            padding: 5px 0;
        }
    }
</style>

<script>
    export default {
        name: "friends",
        methods: {
            pageInit() {
                this.clean();
            },

            clean() {
                Object.assign(this.$data, this.$options.data());
                this.getList();
            },

            getList() {
                axios.get('/users/list', {
                    params: {},
                }).then(res => {
                    console.log(res);
                    this.list = res.data;
                })
            },

        },
        data() {
            return {
                list: [],
            }
        },
        mounted() {
        },
        activated() {
            this.pageInit();
        },
    }
</script>
