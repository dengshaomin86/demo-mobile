<template>
    <div class="tl-con">
        <h1>mine</h1>

        <ul class="list fa-ul">
            <router-link tag="li" :to="item" v-for="(item, idx) in list" :key="idx"><i class="fa fa-globe fa-fw fa-li"></i>{{item}}</router-link>
        </ul>

        <router-link to="/index">index</router-link>
        <router-link to="/login">login</router-link>
    </div>
</template>

<style scoped lang="scss">
    h1 {
        text-transform: uppercase;
    }

    .list {
        margin: 0;
        li {
            cursor: pointer;
            line-height: 1rem;
            margin-left: 0.5rem;
            display: flex;
            align-items: center;
            .fa {
                position: relative;
                top: 0;
                left: 0;
            }
        }
    }

    a {
        line-height: 1rem;
        margin-left: 1rem;
    }

</style>

<script>
    export default {
        name: "mine",
        methods: {},
        data() {
            return {
                list: [
                    'translate',
                    'indexedDB',
                    'share',
                    'imgLoad',
                    'BMap',
                    'transform',
                    'loadingStyle',
                    'computed',
                    'svg',
                    'ws',
                    'font',
                    'touch',
                    'grid',
                ],
            }
        },
        mounted() {
        },
        activated() {
        },
    }
</script>
