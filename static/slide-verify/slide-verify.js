// slide-verify.js
import slideVerifyComponent from './components/slide-verify.vue'

let $vm
export default {
    install(Vue, options) {
        if (!$vm) {
            const slideVerifyPlugin = Vue.extend(slideVerifyComponent);

            $vm = new slideVerifyPlugin({
                el: document.createElement('div')
            });

            document.body.appendChild($vm.$el);
        }

        $vm.show = false;

        let slideVerify = {
            show() {
                $vm.show = true;
            },
            hide() {
                $vm.show = false;
            }
        };

        if (!Vue.$slideVerify) {
            Vue.$slideVerify = slideVerify;
        }

        Vue.mixin({
            created() {
                this.$slideVerify = Vue.$slideVerify;
            }
        })
    }
}