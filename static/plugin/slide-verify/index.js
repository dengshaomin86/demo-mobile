// slide-verify.js
import slideVerifyComponent from './components/slide-verify.vue'

let $vm = null;
let slideVerifyCb = null;
let slideVerify = function (cb) {
    $vm.init();
    slideVerifyCb = cb;
};

export default {
    install(Vue, options) {
        if (!$vm) {
            const slideVerifyPlugin = Vue.extend(slideVerifyComponent);

            $vm = new slideVerifyPlugin({
                el: document.createElement('div')
            });

            document.body.appendChild($vm.$el);
        }

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

export {slideVerifyCb}
