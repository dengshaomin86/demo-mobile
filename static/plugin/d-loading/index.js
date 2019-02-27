import component from './components/index.vue'

let $vm = null;
let loading = function (cb) {
    $vm.init();
};

export default {
    install(Vue, options) {
        if (!$vm) {
            const slideVerifyPlugin = Vue.extend(component);

            $vm = new slideVerifyPlugin({
                el: document.createElement('div')
            });

            document.body.appendChild($vm.$el);
        }

        if (!Vue.$loading) {
            Vue.$loading = loading;
        }

        Vue.mixin({
            created() {
                this.$loading = Vue.$loading;
            }
        })
    }
}
