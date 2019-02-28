/**
 *  1. mixin与prototype区别
 *  Vue.mixin 方式实质就是就是在 vue 初始化对象的时候，把 Vue.mixin 的参数 复制到了初始化对象中
 *  Vue.prototype 就是直接添加到原型上
 *  所以区别就是一个是直接在对象上，一个是在原型上
 *  Vue.mixin 的参数其实和 Vue 构造函数的类似，可以看作是为了复用 Vue 组件的方式。
 *  Vue.prototype 就是完全创建一个新的方法
 */
