<template>
    <div class="tl-con">
        <v-header>
            <h1>ws</h1>
        </v-header>

        <main>

        </main>

    </div>
</template>

<style scoped lang="scss">
    main {
        padding: 15px;
    }
</style>

<script>
    export default {
        name: "ws",
        methods: {
            wsInit() {
                let url = 'ws://redpacket_chat.techmmvv.com/chat/v2';
                // let url = 'ws://localhost:8085?name=d001';
                this.ws = new WebSocket(url);
                // 客户端接收消息
                this.ws.onopen = (event) => {
                    console.log('onopen');
                    // this.ws.send('abc');
                };
                this.ws.onmessage = (event) => {
                    console.log('onmessage', event);
                };
                // 出错
                this.ws.onerror = (error) => {
                    console.log(error);
                };
                // 关闭
                this.ws.onclose = () => {
                    console.log('webSocket断开连接')
                }
            },
        },
        data() {
            return {
                ws: null,
            }
        },
        mounted() {
        },
        activated() {
            this.wsInit();
        },
    }
</script>
