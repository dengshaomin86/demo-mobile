<template>
    <div class="tl-con">
        <v-slide class="slide"></v-slide>

    </div>
</template>

<style scoped lang="scss">
    .slide {
        width: 100%;
        height: 200px;
    }

</style>

<script>
    export default {
        name: "index",
        methods: {
            submit() {
                axios.get('http://218.93.127.26:1111/api/v1/languageApi', {
                    params: {
                        cmd: 'getIsChineseNow',
                        AppName: 'Web',
                        _isAjax: true,
                        LangID: 2,
                        ScopeIDEq: 1,
                        _: new Date().getTime(),
                    },
                    btn: this.$refs.btn,
                    toast: true,
                }).then(function (res) {
                }).catch(function (error) {
                });
            },

        },
        data() {
            return {}
        },
        mounted() {
        },
        activated() {
        },
    }
</script>
