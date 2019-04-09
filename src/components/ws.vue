<template>
    <div class="tl-con">
        <v-header>
            <h1>{{friend.name||'ws'}}</h1>
        </v-header>

        <main>
            <div class="textarea-con">
                <textarea v-model="content"></textarea>
                <button @click="send">send</button>
            </div>

            <ul class="list">
                <li :class="{'r':item.from.id===user.id}" v-for="(item,idx) in list" :key="idx">
                    <p>{{item.content}}</p>
                </li>
            </ul>
        </main>

    </div>
</template>

<style scoped lang="scss">
    ul {
        list-style: none;
    }

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
                this.clean();
            },

            clean() {
                Object.assign(this.$data, this.$options.data());
                this.user = this.$local.get('userInfo');

                ws.message = this.message;
                ws.connect(this.user);

                this.getInfo();
            },

            getInfo() {
                axios.get('/users/info', {
                    params: {
                        id: this.$route.query.id,
                    },
                }).then(res => {
                    console.log(res);
                    this.friend = res.data;
                })
            },

            send() {
                let data = {
                    from: this.user,
                    to: this.friend,
                    content: this.content,
                };
                this.list.push(data);
                ws.send(JSON.stringify(data));
                this.content = "";
            },

            message(msg) {
                console.log('msg', msg);
                let data = JSON.parse(msg.data);
                this.list.push(data);
            },

        },
        data() {
            return {
                content: '',
                list: [],
                user: {},
                friend: {},
            }
        },
        mounted() {
        },
        activated() {
            this.pageInit();
        },
    }
</script>
