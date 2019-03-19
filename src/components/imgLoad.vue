<template>
    <div class="tl-con">
        <h1>imgLoad</h1>

        <ul class="list">
            <li v-for="item in imgList">
                <d-lazy-load :src="item.path" :error="error"></d-lazy-load>
            </li>
            <li>
                <d-lazy-load :src="path" :error="error"></d-lazy-load>
            </li>
        </ul>

        <router-link to="/mine">mine</router-link>
        <a @click="$back">back</a>

    </div>
</template>

<style scoped lang="scss">
    .list {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        align-items: flex-start;
        justify-content: space-around;
        padding: 0.2rem;

        li {
            width: 4.4rem;
            height: 4.4rem;
            background-color: rebeccapurple;
            margin-bottom: 0.4rem;
        }
    }

    a {
        line-height: 1rem;
        margin-left: 1rem;
    }

</style>

<script>
    export default {
        name: "imgLoad",
        methods: {},
        data() {
            return {
                imgList: [
                    {
                        path: 'http://45.120.45.138:8220/userfiles/37/ad/20190127-143209-03337.png',
                    },
                    {
                        path: 'http://45.120.45.138:8220/userfiles/37/ad/20190127-143209-033371111.png',
                    },
                    {
                        path: 'http://45.120.45.138:8220/userfiles/37/ad/20190127-143209-03337.png',
                    },
                    {
                        path: 'http://45.120.45.138:8220/userfiles/37/ad/20190127-143209-033371111.png',
                    },
                    {
                        path: 'http://run.techmmvv.com/userfiles/18/im/normal/20190319-181134-46072.jpg',
                    },
                ],
                path: '',
                error: require('../assets/images/logo/logo.png'),
            }
        },
        mounted() {
        },
        activated() {
            setTimeout(() => {
                this.path = "http://run.techmmvv.com/userfiles/18/im/normal/20190319-181134-46072.jpg";
            }, 1)
        },
    }
</script>
