<template>
    <div class="tl-con">
        <v-header>
            <h1>touch</h1>
        </v-header>

        <div style="width: 300px;height: 300px;background-color: #5b64ff" id="app" class="box" v-tap="vuetouch"
             v-longtap="{fn:vuetouch,name:'长按'}"
             v-swipeleft="{fn:vuetouch,name:'左滑'}"
             v-swiperight="{fn:vuetouch,name:'右滑'}"
             v-swipeup="{fn:vuetouch,name:'上滑'}"
             v-swipedown="{fn:vuetouch,name:'下滑'}">
            {{ name }}
        </div>

    </div>
</template>

<style scoped lang="scss">

</style>

<script>
    export default {
        name: "touch",
        methods: {
            vuetouch: function (s, e) {
                this.name = s.name
            }

        },
        data() {
            return {
                name: '',
            }
        },
        mounted() {
        },
        activated() {
        },
    }
</script>
