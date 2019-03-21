<template>
    <div class="tl-con">
        <v-header>
            <h1>ws</h1>
        </v-header>

        <main>
            <div class="textarea-con">
                <textarea v-model="content"></textarea>
                <button @click="send">send</button>
            </div>

            <ul class="list">
                <li :class="{'r':item.type==='m'}" v-for="(item,idx) in list" :key="idx">
                    <p>{{item.content}}</p>
                </li>
            </ul>
        </main>

    </div>
</template>

<style scoped lang="scss">
    .textarea-con {
        padding: 15px;
        textarea {
            width: 100%;
            height: 100px;
            padding: 5px;
            resize: none;
        }
        button {
            width: 100%;
            height: 40px;
            margin: 10px 0;
            text-transform: uppercase;
            background-color: #1d1d41;
        }
    }

    .list {
        padding: 15px;
        list-style: none;
        li {
            margin: 10px 0;
            display: flex;
            justify-content: flex-start;
            p {
                background-color: #fff;
                color: #333;
                padding: 5px 15px;
            }
            &.r {
                justify-content: flex-end;
                p {
                    background-color: #6175ff;
                    color: #fff;
                }
            }
        }
    }

</style>

<script>
    import ws from './../ws'

    export default {
        name: "ws",
        methods: {
            pageInit() {
                ws.message = this.message;
                ws.connect();
            },

            send() {
                this.list.push({
                    type: 'm',
                    content: this.content,
                });
                ws.send(this.content);
            },

            message(data) {
                console.log('msg', data);
            },

        },
        data() {
            return {
                content: '',
                list: [],
            }
        },
        mounted() {
        },
        activated() {
            this.pageInit();
        },
    }
</script>
