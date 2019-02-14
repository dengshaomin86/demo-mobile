<template>
    <div class="tl-con">
        <h1>indexedDB</h1>

        <ul class="list">
            <li @click="add">add</li>
            <li @click="get">get</li>
        </ul>

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
    export default {
        name: "indexedDB",
        methods: {
            // 判断
            judge() {
                //  一旦你的浏览器支持IndexedDB，我们就可以打开它。但不能直接打开IndexedDB数据库。IndexedDB需要你创建一个请求来打开它
                window.indexedDB && this.createDB();
            },

            // 创建
            createDB() {
                this.request = window.indexedDB.open("testDB", 1); //第一个参数是数据库的名称，第二个参数是数据库的版本号。版本号可以在升级数据库时用来调整数据库结构和数据

                let request = this.request;
                request.onsuccess = (event) => {
                    console.log("成功打开DB");
                    this.db = event.target.result;
                };
                request.onerror = (event) => {
                    console.log("打开DB失败", event);
                };
                request.onupgradeneeded = (event) => {
                    console.log("Upgrading");
                    this.db = event.target.result;
                    let objectStore = this.db.createObjectStore("students", {keyPath: "rollNo"});
                };
            },

            // 增加
            add() {
                // 增——往ObjectStore里新增对象
                // 为了往数据库里新增数据，我们首先需要创建一个事务，并要求具有读写权限。在indexedDB里任何的存取对象的操作都需要放在事务里执行。
                let transaction = this.db.transaction(["students"], "readwrite");

                let objectStore = transaction.objectStore("students");

                let key = Math.random();
                key = 1;
                let obj = {
                    rollNo: "rollNo" + key,
                    name: "name" + key,
                };
                objectStore.add(obj);

                transaction.oncomplete = function (event) {
                    console.log("Success", objectStore, event);
                };
                transaction.onerror = function (event) {
                    console.log("Error", objectStore, event);
                };

            },

            // 删除
            del() {
                // 删——ObjectStore里删除对象
                // 删除跟新增一样，需要创建事务，然后调用删除接口，通过key删除对象
                this.db.transaction(["students"], "readwrite").objectStore("students").delete('rollNo1');
            },

            // 查看
            get() {
                // 查——通过key取出对象，即往get()方法里传入对象的key值，取出相应的对象
                let request = this.db.transaction(["students"], "readwrite").objectStore("students").get('rollNo1');
                request.onsuccess = function (event) {
                    console.log("Name : " + request.result.name);
                };
            },

            // 修改
            edit() {
                // 改—— 为了更新一个对象，首先要把它取出来，修改，然后再放回去
                let transaction = this.db.transaction(["students"], "readwrite");
                let objectStore = transaction.objectStore("students");
                let request = objectStore.get(rollNo);
                request.onsuccess = function (event) {
                    console.log("Updating : " + request.result.name + " to " + name);
                    request.result.name = name;
                    objectStore.put(request.result);
                };
            },

        },
        data() {
            return {
                db: null,
                request: null,
            }
        },
        mounted() {
        },
        activated() {
            this.judge();
        },
    }
</script>
