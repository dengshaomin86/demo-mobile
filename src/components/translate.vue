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
                <p>{{targetLang.value}}({{targetLang.key}})</p>
            </div>
            <button @click="getData">翻译</button>
            <!--<textarea v-model="translateDataStr"></textarea>-->
            <textarea v-model="objSortStr"></textarea>
        </div>

        <template v-if="chooseFlag">
            <div class="language-con" @click="chooseFlag=false">
                <ul class="language-con-list" @click.stop>
                    <li :class="{'active':targetLang.key===item.key}" v-for="(item, idx) in langList" :key="idx" @click="chooseLang(item)">{{item.value}}</li>
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
                    // console.log(res);
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
                        this.translateOldData = res;
                        this.objLength = this.getObjLength(res);
                        console.log('objLength', this.objLength);
                        this.translateSecond = 0;

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
                        to: this.targetLang.key || 'en',  // 译文语言
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

                    this.translateSecond++;
                    if (this.translateSecond === this.objLength) {
                        console.log('end');
                        this.translateDataStr = JSON.stringify(this.translateData);
                        // this.objSortStr = JSON.stringify(this.keySort(this.translateData));
                        this.objSortStr = JSON.stringify(this.keySortOld(this.translateOldData, this.translateData));
                    }

                }).catch(error => {
                    console.log(q);
                    console.log(error);
                });
            },

            // 首字母大写
            capitalize(text) {
                if (text && typeof text === 'string') {
                    text = text.substr(0, 1).toUpperCase() + text.substr(1)
                }
                return text
            },

            // 对象属性排序
            keySort(obj) {
                let NewKey = Object.keys(obj).sort();
                let NewObj = {};
                NewKey.forEach(item => {
                    NewObj[item] = obj[item];
                });

                // 二级排序
                for (let key in NewObj) {
                    let obj2nd = NewObj[key];
                    switch (typeof obj2nd) {
                        case "object":
                            let NewKey2nd = Object.keys(obj2nd).sort();
                            let NewObj2nd = {};
                            NewKey2nd.forEach(item => {
                                NewObj2nd[item] = obj2nd[item];
                            });
                            NewObj[key] = NewObj2nd;
                            break;
                    }
                }

                return NewObj

            },

            // 按原来属性顺序排序
            keySortOld(oldObj, data) {
                let NewObj = {};
                for (let key in oldObj) {

                    switch (typeof oldObj[key]) {
                        case "string":
                            NewObj[key] = data[key];
                            break;
                        case "object":
                            NewObj[key] = {};
                            let obj2nd = oldObj[key];
                            for (let key2nd in obj2nd) {
                                switch (typeof obj2nd[key2nd]) {
                                    case "string":
                                        NewObj[key][key2nd] = data[key] ? data[key][key2nd] : undefined;
                                        break;
                                    case "object":
                                        break;
                                }
                            }
                            break;
                    }

                }
                return NewObj
            },

            // 获取对象长度
            getObjLength(obj) {
                let length = 0;
                for (let key in obj) {
                    switch (typeof obj[key]) {
                        case "string":
                            length++;
                            break;
                        case "object":
                            let obj2nd = obj[key];
                            for (let key2nd in obj2nd) {
                                switch (typeof obj2nd[key2nd]) {
                                    case "string":
                                        length++;
                                        break;
                                    case "object":
                                        break;
                                }
                            }
                            break;
                    }
                }

                return length

            },

            // 选择翻译目标语言
            chooseLang(item) {
                this.targetLang = item;
            },

        },
        data() {
            return {
                searchText: '',
                translateText: '',
                langList: [],
                text: '还好',

                translateOldData: {},
                translateData: {},
                translateDataStr: '',

                chooseFlag: false,
                targetLang: {
                    key: "en",
                    value: "英语"
                },

                objSortStr: '',
                objLength: 0,
                translateSecond: 0,
            }
        },
        mounted() {
            this.getLangList();
        },
        activated() {
        },
        computed: {},
        watch: {},
    }
</script>
