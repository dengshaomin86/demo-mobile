import Vue from "vue"

/**
 * focus
 */
Vue.directive('d-focus', {
  // 只调用一次，指令第一次绑定到元素时调用，可以定义一个在绑定时执行一次的初始化动作
  bind: function (el, binding, vnode, oldVnode) {
    /**
     * 钩子函数有以下参数：
     el：指令所绑定的元素，可以用来直接操作 DOM 。
     binding：一个对象，包含以下属性：
     name：指令名，不包括“v”前缀；
     value：指令的绑定值，例如` v­my­directive="1 + 1"，value 的值是2；
     oldValue：指令绑定的前一个值，仅在update和componentUpdated钩子中可用，无论值是否改变都可用；
     expression：绑定值的字符串形式，例如v­my­directive="1 + 1" ，expression的值是“1 + 1”；
     arg：传给指令的参数。例如 v­my­directive:foo， arg 的值是 “foo”。
     modifiers：一个包含修饰符的对象， 例如v­my­directive.foo.bar，修饰符对
     象modifiers的值是{ foo: true, bar: true }；

     vnode：Vue编译生成的虚拟节点。
     oldVnode：上一个虚拟节点，仅在update和componentUpdated 钩子中可用。
     */

  },
  // 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document中）
  inserted: function (el) {
    el.focus()
  },
  // 被绑定元素所在的模板更新时调用，而不论绑定值是否变化；通过比较更新前后的绑定值，可以忽略不必要的模板更新
  update: function () {

  },
  // 被绑定元素所在模板完成一次更新周期时调用
  componentUpdated: function () {

  },
  // 只调用一次， 指令与元素解绑时调用
  unbind: function () {

  }
});


/**
 * command
 */
Vue.directive('d-command', {
  bind: function (el, binding, vnode) {
    let keys = []
    for (let key in vnode) {
      keys.push(key)
    }
    console.log(keys)
    el.innerHTML =
      // '<div v-command:expression=.a.b.c="value"></div>' + "<br>" +
      "name: " + binding.name + "<br>" +
      "name: " + binding.value + "<br>" +
      "expression: " + binding.expression + "<br>" +
      "argument: " + binding.arg + "<br>" +
      "modifiers: " + JSON.stringify(binding.modifiers) + "<br>" +
      "vnode keys: " + keys.join(", ") + "<br>"
  }
});
