<template>
    <div class="tl-con">
        <h1>share</h1>

        <ul class="list">
            <li v-for="item in list" @click="share(item)">{{item}}</li>
        </ul>

        <router-link to="/mine">mine</router-link>

    </div>
</template>

<style scoped lang="scss">
    .list {
        li {
            cursor: pointer;
            line-height: 1rem;
            margin-left: 1rem;
        }
    }

    a {
        line-height: 1rem;
        margin-left: 1rem;
    }

</style>

<script>
    export default {
        name: "share",
        methods: {
            share(key) {
                console.log(key);
                switch (key) {
                    case 'twitter':
                        window.open("http://twitter.com/home?status=" + encodeURIComponent(location.href) + "" + encodeURIComponent('shareTitle'), "sharer", "toolbar=0,status=0,width=626,height=436");
                        break;
                    case 'facebook':
                        window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(location.href));
                        break;
                    case 'google':
                        window.open("https://plus.google.com/share?url=" + encodeURIComponent(location.href), "sharer", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
                        break;
                    case 'linkedIn':
                        window.open("http://www.linkedin.com/shareArticle?url=" + encodeURIComponent(location.href), "sharer", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
                        break;
                }
            },

        },
        data() {
            return {
                list: ['twitter', 'facebook', 'google', 'linkedIn'],
            }
        },
        mounted() {
        },
        activated() {
        },
    }
</script>
