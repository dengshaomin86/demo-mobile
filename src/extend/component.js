import Vue from 'vue'

Vue.component('child', {
  // 如使用template则只允许有一个子节点
  render: function (createElement) {  // 注意，参数createElement不可修改

    // createElement函数的使用：
    return createElement(
      // 第一个参数（必须，用于创建DOM元素，可以是String/ Object/ Function）
      'h' + this.level,                       // String（HTML标签）
      // {template: '<div>haha</div>>'},         // Object（含有数据选项的对象）
      // function () {                           // Function（返回含有数据选项的对象）
      //     return {template: '<div>haha</div>>'}
      // },

      // 第二个参数（可选，数据对象，只能是Object）
      this.$slots.default     // 含有VNode的数组
      // {
      //     class: {active: true},  // 创建的DOM元素的属性
      //     style: {color: red, fontSize: '16px'},
      //     attrs: {id: 1, src: ""},
      //     domProps: {innerHTML: '<span style="color: red">红色</span>'},
      //     on: {input: functiopn(){//...}}
      // }

      // 第三个参数（可选，动态的VNode虚拟节点，可以是String或Array）
      // [createElement("h1", "标题"), createElement("h2", "二级标题")]
    );
  },
  props: ['level']        // 使用props在render函数中传递数据
});


Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // tag name 标签名称
      this.$slots.default // 子组件中的阵列
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
});
