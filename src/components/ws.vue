<template>
    <div class="tl-con">
        <v-header>
            <h1>ws</h1>
        </v-header>

        <main>
            <div class="users">
                <p>选择用户：</p>
                <ul>
                    <li :class="{'active':user.id===item.id}" v-for="(item,idx) in users" :key="idx" @click="user=item">{{item.name}}</li>
                </ul>
            </div>

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

    .users {
        display: flex;
        align-items: center;
        padding: 15px;
        p {
            margin-right: 15px;
        }
        ul {
            display: flex;
            align-items: center;
            li {
                margin-right: 15px;
                padding: 5px 10px;
                &.active {
                    background-color: #3f51b5;
                    transition: 0.5s;
                }
                &:active {
                    opacity: 0.7;
                }
            }
        }
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
                this.user = this.users[0];

                ws.message = this.message;
                ws.connect(this.user);
            },

            send() {
                let to = this.users.filter(item => {
                    return item.id !== this.user.id
                })[0];

                let data = {
                    from: this.user,
                    to: to,
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
                users: [
                    {
                        id: 1,
                        name: 'user1',
                    },
                    {
                        id: 2,
                        name: 'user2',
                    }
                ],
                user: {},
            }
        },
        mounted() {
        },
        activated() {
            this.pageInit();
        },
    }
</script>
