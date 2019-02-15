<template>
    <div class="tl-con">
        <h1>indexedDB</h1>

        <ul class="list">
            <li @click="add">add</li>
            <li @click="del">del</li>
            <li @click="edit">edit</li>
            <li @click="get">get</li>
            <li @click="getByIndex">索引name</li>
            <li @click="readAll">readAll</li>
            <li @click="getAll">getAll</li>
            <li @click="closeDB(db)">关闭数据库</li>
            <li @click="delDB('testDB')">删除数据库</li>
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

            // 关闭数据库
            closeDB(db) {
                db.close();
            },

            // 删除数据库
            delDB() {
                console.log('delDB');
                let DBDeleteRequest = window.indexedDB.deleteDatabase('testDB');

                DBDeleteRequest.onerror = function (event) {
                    console.log('Error 删除数据库失败');
                };

                DBDeleteRequest.onsuccess = function (event) {
                    console.log('success 删除数据库成功');
                };
            },

            // 创建
            createDB() {
                // 第一个参数是数据库的名称，第二个参数是数据库的版本号。版本号可以在升级数据库时用来调整数据库结构和数据
                this.request = window.indexedDB.open("testDB", 1);

                let request = this.request;
                request.onupgradeneeded = (event) => {
                    console.log("Upgrading");
                    this.db = event.target.result;
                    if (!this.db.objectStoreNames.contains('students')) {
                        // 创建对象仓库 object store --- 即新建表
                        // 新增一张叫做students的表格，主键是rollNo --- 主键（key）是默认建立索引的属性
                        let objectStore = this.db.createObjectStore('students', {keyPath: "rollNo"});

                        // 如果数据记录里面没有合适作为主键的属性，那么可以让 IndexedDB 自动生成主键
                        // this.db.createObjectStore('students', { autoIncrement: true });


                        // 新建对象仓库以后，下一步可以新建索引
                        // IDBObject.createIndex()的三个参数分别为索引名称、索引所在的属性、配置对象（说明该属性是否包含重复的值）
                        objectStore.createIndex('name', 'name', {unique: false});
                        objectStore.createIndex('email', 'email', {unique: true});

                    }
                };
                request.onsuccess = (event) => {
                    console.log("成功打开DB");
                    this.db = event.target.result;
                    console.log(this.db);
                };
                request.onerror = (event) => {
                    console.log("打开DB失败", event);
                };
                request.onblocked = (event) => {
                    console.log("连接未关闭 onblocked", event);
                };
            },

            // 增加
            add() {
                // 增---往ObjectStore里新增对象
                // 为了往数据库里新增数据，我们首先需要创建一个事务，并要求具有读写权限。在indexedDB里任何的存取对象的操作都需要放在事务里执行
                // IndexedDB 支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况
                /**
                 * 事务具有三种模式
                 * 只读：read，不能修改数据库数据，可以并发执行
                 * 读写：readwrite，可以进行读写操作
                 * 版本变更：verionchange
                 */

                let transaction = this.db.transaction(["students"], "readwrite");

                let objectStore = transaction.objectStore("students");

                let key = Math.random();
                key = 1;
                let obj = {
                    rollNo: "rollNo" + key,
                    name: "name" + key,
                };
                objectStore.add(obj);
                objectStore.add({
                    rollNo: "rollNo" + 2,
                    name: {
                        abc: 123,
                        def: 123,
                    },
                });
                objectStore.add({
                    rollNo: "rollNo" + 3,
                    name: "name" + 3,
                });
                objectStore.add({
                    rollNo: "rollNo" + 4,
                    name: "name" + 3,
                });

                transaction.oncomplete = function (event) {
                    console.log("Success 数据写入成功", event);
                };
                transaction.onerror = function (event) {
                    console.log("Error 数据写入失败", event);
                };

            },

            // 删除
            del() {
                // 删---ObjectStore里删除对象
                // 删除跟新增一样，需要创建事务，然后调用删除接口，通过key删除对象
                let request = this.db.transaction(["students"], "readwrite").objectStore("students").delete('rollNo1');

                request.onsuccess = function (event) {
                    console.log('数据删除成功');
                };
            },

            // 读取 --- objectStore.get()方法用于读取数据，参数是主键的值
            get() {
                // 查---通过key取出对象，即往get()方法里传入对象的key值，取出相应的对象
                console.log(this.db.transaction(["students"], "readwrite").objectStore("students"));
                let request = this.db.transaction(["students"], "readwrite").objectStore("students").get('rollNo1');
                request.onsuccess = function (event) {
                    if (request.result) {
                        console.log("Name : " + request.result.name);
                    } else {
                        console.log('未获得数据记录');
                    }
                };
                request.onerror = function (event) {
                    console.log('事务失败');
                };
            },

            // 使用索引
            getByIndex() {
                // 索引的意义在于，可以让你搜索任意字段，也就是说从任意字段拿到数据记录。如果不建立索引，默认只能搜索主键（即从主键取值）
                let transaction = this.db.transaction(['students'], 'readonly');
                let store = transaction.objectStore('students');
                let index = store.index('name');

                // 遍历索引下的所有数据
                index.openCursor().onsuccess = function (event) {
                    let cursor = event.target.result;

                    if (cursor) {
                        console.log(cursor.value);
                        cursor.continue();
                    } else {
                        console.log('没有更多数据了！');
                    }
                };

                // 读取索引下的某一条
                let request = index.get('name1');
                request.onsuccess = function (e) {
                    let result = e.target.result;
                    if (result) {
                        console.log('查到name1', result);
                    } else {
                        console.log('没有这条数据！');
                    }
                }
            },

            // 遍历数据 --- 遍历数据表格的所有记录，要使用指针对象 IDBCursor
            readAll() {
                let objectStore = this.db.transaction('students').objectStore('students');

                // 新建指针对象的openCursor()方法是一个异步操作，所以要监听success事件
                objectStore.openCursor().onsuccess = function (event) {
                    let cursor = event.target.result;

                    if (cursor) {
                        console.log(cursor.value);
                        cursor.continue();
                    } else {
                        console.log('没有更多数据了！');
                    }
                };
            },

            getAll() {
                // objectStore.getAll() --- 获取所有记录
                // objectStore.getAll(query) --- 获取所有符合指定主键或 IDBKeyRange 的记录
                // objectStore.getAll(query, count) --- 指定获取记录的数量

                let objectStore = this.db.transaction('students').objectStore('students');
                let req = objectStore.getAll();
                // let req = objectStore.getAll('rollNo1');
                req.onsuccess = function (e) {
                    console.log(e.target.result);
                }
            },

            // 修改
            edit() {
                // 改---为了更新一个对象，首先要把它取出来，修改，然后再放回去
                let transaction = this.db.transaction(["students"], "readwrite");
                let objectStore = transaction.objectStore("students");
                let request = objectStore.get('rollNo1');
                let name = 'name' + Math.random();
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
