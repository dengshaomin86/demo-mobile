<template>
    <div class="tl-con">
        <v-header>
            <h1>translate</h1>
        </v-header>

        <ul class="list">
            <li>
                <input type="text" placeholder="请输入要翻译的内容" @input="search" v-model="searchText">
                <p>译: {{translateText}}</p>
            </li>
            <!--<li v-text="echo('自动百度翻译，优先本地语言库')"></li>-->
            <!--<li v-text="echo(text)"></li>-->
        </ul>

        <div class="tr-con">
            <div class="choose" @click="chooseFlag=true">
                <p>选择目标语言</p>
                <p>{{trLang.value}}({{trLang.key}})</p>
            </div>
            <button @click="getData">翻译</button>
            <textarea v-model="translateDataStr"></textarea>
        </div>

        <template v-if="chooseFlag">
            <div class="language-con" @click="chooseFlag=false">
                <ul class="language-con-list" @click.stop>
                    <li :class="{'active':trLang.key===item.key}" v-for="(item, idx) in langList" :key="idx" @click="chooseLang(item)">{{item.value}}</li>
                </ul>
            </div>
        </template>

    </div>
</template>

<style scoped lang="scss">
    .list {
        li {
            cursor: pointer;
            line-height: 1rem;
            margin-left: 1rem;
            text-transform: capitalize;
        }
    }

    .tr-con {
        margin: 15px;
        .choose {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        button {
            display: block;
            width: 5rem;
            padding: 10px;
            background-color: #1d1d41;
            margin-bottom: 10px;
        }
        textarea {
            width: 100%;
            height: 5rem;
            resize: none;
        }
    }

    .language-con {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background-color: rgba(0, 0, 0, 0.7);
        &-list {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 50%;
            overflow-x: hidden;
            background-color: #fff;
            color: #333;
            li {
                border-bottom: 1px solid #ccc;
                line-height: 40px;
                text-align: center;
                &.active {
                    color: #fff;
                    background-color: #4dabff;
                }
            }
        }
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
                    server: 'translate',
                }).then((res) => {
                    console.log(res);
                    this.translateText = res.data.trans_result[0].dst;
                })
            },

            // 获取语言列表
            getLangList() {
                axios.get('static/language/langList.json', {
                    loading: false,
                    server: "static",
                }).then((res) => {
                    console.log(res);
                    this.langList = res.list;
                })
            },

            // zh
            getData() {
                axios.get('static/language/zh.json', {
                    loading: false,
                    server: "static",
                }).then((res) => {
                    console.log(res);
                    if (typeof res === 'object') {
                        for (let v1 in res) {

                            switch (typeof res[v1]) {
                                case "object":
                                    for (let v2 in res[v1]) {

                                        switch (typeof res[v1][v2]) {
                                            case "object":
                                                break;
                                            case "string":
                                                this.translateArr(res[v1][v2], v1, v2);
                                                break;
                                        }

                                    }
                                    break;
                                case "string":
                                    break;
                            }

                        }
                    }

                })
            },

            translateArr(text, v1, v2) {
                let q = text;
                let appID = '20190214000266633';
                let key = 'dQz1WyRWp2TLzkZOSEOb';
                let salt = Math.random();
                let sign = appID + q + salt + key;

                axios.get('/api/trans/vip/translate', {
                    params: {
                        q: q,  // 请求翻译query
                        from: 'zh',  // 翻译源语言
                        to: this.trLang.key || 'en',  // 译文语言
                        appid: appID,  // APP ID
                        salt: salt,  // 随机数
                        sign: md5(sign),  // 签名 appid+q+salt+密钥 的MD5值
                    },
                    server: 'translate',
                }).then((res) => {
                    // console.log(res);
                    // console.log(res.trans_result[0].dst);
                    this.translateData[v1] = this.translateData[v1] || {};
                    this.translateData[v1][v2] = this.capitalize(res.trans_result[0].dst);
                    this.translateDataStr = JSON.stringify(this.translateData)

                })
            },

            capitalize(text) {
                if (text && typeof text === 'string') {
                    text = text.substr(0, 1).toUpperCase() + text.substr(1)
                }
                return text
            },

            // 对象属性排序
            objKeySort(obj) {
                //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
                let newkey = Object.keys(obj).sort();
                let newObj = {}; // 创建一个新的对象，用于存放排好序的键值对
                for (let i = 0; i < newkey.length; i++) {
                    newObj[newkey[i]] = obj[newkey[i]]; // 向新创建的对象中按照排好的顺序依次增加键值对
                }
                return newObj
            },

            chooseLang(item) {
                this.trLang = item;
            },

        },
        data() {
            return {
                searchText: '',
                translateText: '',
                langList: [],
                text: '还好',

                translateData: {},
                translateDataStr: '',

                chooseFlag: false,
                trLang: {
                    key: "en",
                    value: "英语"
                }
            }
        },
        mounted() {
            this.getLangList();
            let obj = {
                abc: '123',
                dbc: '123',
                cbc: '123',
                bbc: {
                    abc: '123',
                    dbc: '123',
                    cbc: '123',
                },
                123: '123',
            };
            console.log(this.objKeySort(obj));
            // this.getData();
        },
        activated() {
        },
        computed: {},
        watch: {},
    }
</script>
