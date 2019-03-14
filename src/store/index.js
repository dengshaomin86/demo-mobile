import Vue from 'vue'

Vue.prototype.$local = {
    key: "app-data",
    set(key, data) {
        let $data = localStorage.getItem(this.key);
        $data = $data ? JSON.parse($data) : {};
        let obj = {};
        obj[key] = data;
        localStorage.setItem(this.key, JSON.stringify(Object.assign($data, obj)));
    },
    get(key) {
        let $data = localStorage.getItem(this.key);
        $data = $data ? JSON.parse($data) : {};
        return $data[key] || null
    },
    remove(key) {
        let $data = localStorage.getItem(this.key);
        $data = $data ? JSON.parse($data) : {};
        delete $data[key];
        localStorage.setItem(this.key, JSON.stringify($data));
    }
};