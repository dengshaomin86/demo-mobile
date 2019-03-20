import component from './components/index.vue'

export default {
    install(Vue, options) {
        let $vm = null;
        if (!$vm) {
            const loadingPlugin = Vue.extend(component);

            $vm = new loadingPlugin({
                el: document.createElement('div')
            });

            document.body.appendChild($vm.$el);
        }

        Vue.prototype.$loading = {
            show() {
                $vm.flag = true;
            },
            hide() {
                $vm.flag = false;
            },
        }

    }
}
