import Vue from 'vue'
import Vuex from 'vuex'
import {SOME_MUTATION} from './mutation-types'

Vue.use(Vuex);

const state = {
    count: 0
};

// 计算属性，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
const getters = {
    count: function (state) {
        return state.count += 100;
    },
    // 以属性的形式访问 store.getters.doneTodos
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    },
    // 传入参数id查询 store.getters.getTodoById(2)
    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
    }
};

// 事件，必须是同步函数，异步函数中的回调让这不可能完成：因为当 mutation 触发的时候，回调函数还没有被调用
const mutations = {
    add(state, n) {
        state.count += n;
    },
    reduce(state) {
        state.count -= 1;
    },
    // store.commit('increment')
    increment(state) {
        state.count++
    },
    // 提交载荷，传入参数 store.commit('setNumber', {amount: 10})；对象风格的提交方式 store.commit({type: 'setNumber',amount: 10})
    setNumber(state, payload) {
        state.count = payload.amount
    },
    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [SOME_MUTATION](state) {
        // mutate state
    }
};

// 类似于 mutation，Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作
// 以载荷形式分发 store.dispatch('incrementAsync', {amount: 10})
// 以对象形式分发 store.dispatch({type: 'incrementAsync',amount: 10})
// Action 通常是异步的，那么如何知道 action 什么时候结束呢？store.dispatch('actionA').then(() => {})
const actions = {
    // store.dispatch('increment')
    increment(context) {
        // context：上下文对象，这里你可以理解称store本身
        context.commit('increment')
    },
    // 用到 ES2015 的 参数解构 来简化代码
    increment2({commit}) {
        commit('increment')
    },
    // 在 action 内部执行异步操作
    incrementAsync({commit}) {
        setTimeout(() => {
            commit('increment')
        }, 1000)
    },
    checkout({commit, state}, products) {
        // 把当前购物车的物品备份起来
        const savedCartItems = [...state.cart.added]
        // 发出结账请求，然后乐观地清空购物车
        commit(types.CHECKOUT_REQUEST)
        // 购物 API 接受一个成功回调和一个失败回调
        shop.buyProducts(
            products,
            // 成功操作
            () => commit(types.CHECKOUT_SUCCESS),
            // 失败操作
            () => commit(types.CHECKOUT_FAILURE, savedCartItems)
        )
    },
    // 假设 getData() 和 getOtherData() 返回的是 Promise
    async actionA({commit}) {
        commit('gotData', await getData())
    },
    // 一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行
    async actionB({dispatch, commit}) {
        await dispatch('actionA') // 等待 actionA 完成
        commit('gotOtherData', await getOtherData())
    }
};

export default new Vuex.Store({state, getters, mutations, actions});

// localStorage
const $local = {
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

Vue.prototype.$local = $local;
