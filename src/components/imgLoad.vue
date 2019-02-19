<template>
    <div class="tl-con">
        <h1>imgLoad</h1>

        <ul class="list">
            <li v-for="item in imgList">
                <div class="img" :style="'background-image: url('+item.src+')'">
                    <!--<img :data-i="item.src" :src="item.src">-->
                </div>
            </li>
        </ul>

        <router-link to="/mine">mine</router-link>

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
            background-color: rebeccapurple;
            margin-bottom: 0.4rem;
            .img {
                width: inherit;
                height: 4.4rem;
                background: url("../assets/images/logo/logo.png") no-repeat center center;
                background-size: cover;
            }
            img {
                max-width: 100%;
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
                ],
                logo: 'static/logo.png',
            }
        },
        mounted() {
        },
        activated() {
            this.imgList.map((item) => {
                this.IsHasImg(item.path, this.logo, (r) => {
                    item.src = r;
                    this.$forceUpdate();
                })
            });
        },
    }
</script>
