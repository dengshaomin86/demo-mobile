import component from './components/toast'

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

        let Toast = (opts) => {
            $vm = Object.assign($vm, opts);
            $vm.show();
        };

        Toast.hide = () => {
            $vm.flag = false;
        };

        Vue.prototype.$toast = Toast;

    }
}
