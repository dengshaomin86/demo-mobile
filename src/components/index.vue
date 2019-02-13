<template>
    <div class="tl-con">
        <h1>index</h1>

        <ul class="list">
            <li v-for="item in list" @click="share(item)">{{item}}</li>
            <li><i class="fas fa-sort-down"></i></li>
            <li v-for="item in imgList">
                <img :data-i="item.src" :src="item.src">
            </li>
        </ul>

        <router-link to="/login">login</router-link>
        <router-link to="/mine">mine</router-link>

    </div>
</template>

<style scoped lang="scss">
    .list {
        li {
            cursor: pointer;
            line-height: 1rem;
            margin-left: 1rem;
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
        name: "index",
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

            translate() {
                $.ajaxJson('http://api.fanyi.baidu.com/api/trans/vip/translate', {
                    q: '你好',  // 请求翻译query
                    from: 'zh',  // 翻译源语言
                    to: 'en',  // 译文语言
                    appid: '',  // APP ID
                    salt: '',  // 随机数
                    sign: '',  // 签名 appid+q+salt+密钥 的MD5值
                    abc: 123,
                }, {
                    before: function () {
                        console.log('before');
                    },
                    yes: function () {
                        console.log('yes');
                    },
                    no: function () {
                        console.log('no');
                    },
                    over: function () {
                        console.log('over');
                    }
                })
            },

        },
        data() {
            return {
                list: ['twitter', 'facebook', 'google', 'linkedIn'],
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
                logo: 'static/logo.png'
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
