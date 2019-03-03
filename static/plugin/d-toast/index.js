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

        let Toast = () => {
            $vm.flag = true;
        };

        Toast.hide = () => {
            $vm.flag = false;
        };

        Vue.prototype.$toast = Toast;

    }
}
