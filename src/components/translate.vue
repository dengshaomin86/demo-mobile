<template>
    <div class="tl-con">
        <h1>translate</h1>

        <ul class="list">
            <li>
                <input type="text" placeholder="请输入要翻译的内容" @input="search" v-model="searchText">
                <p>译: {{translateText}}</p>
            </li>
            <li v-text="echo('自动百度翻译，优先本地语言库')"></li>
            <li v-text="echo(text)"></li>
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
        }
    }

    a {
        line-height: 1rem;
        margin-left: 1rem;
    }

</style>

<script>
    let lodash = require('lodash');
    let md5 = require('js-md5');

    export default {
        name: "translate",
        methods: {
            // 节流
            search: lodash.debounce(function () {
                this.searchText ? this.translate(this.searchText) : this.translateText = '';
            }, 500),

            // 百度翻译
            translate(text) {
                let q = text;
                let appID = '20190214000266633';
                let key = 'dQz1WyRWp2TLzkZOSEOb';
                let salt = Math.random();
                let sign = appID + q + salt + key;

                axios.get('/api/trans/vip/translate', {
                    params: {
                        q: q,  // 请求翻译query
                        from: 'zh',  // 翻译源语言
                        to: 'en',  // 译文语言
                        appid: appID,  // APP ID
                        salt: salt,  // 随机数
                        sign: md5(sign),  // 签名 appid+q+salt+密钥 的MD5值
                    },
                }).then((res) => {
                    console.log(res);
                    this.translateText = res.data.trans_result[0].dst;
                }).catch((error) => {
                    console.log('error', error);
                });

            },

            // 获取语言列表
            getLangList() {
                axios.get('static/language/langList.json', {
                    loading: false,
                }).then((res) => {
                    console.log(res);
                    this.langList = res.data.list;
                }).catch((error) => {
                    console.log('error', error);
                });
            },

        },
        data() {
            return {
                searchText: '',
                translateText: '',
                langList: [],
                text: '还好',
            }
        },
        mounted() {
            this.getLangList();
        },
        activated() {
        },
    }
</script>
