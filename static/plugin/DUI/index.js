import $toast from './d-toast'
import $loading from './d-loading'

const components = [$toast, $loading];

export {
    $toast, $loading
}

function install(Vue) {
    if (install.installed) {
        return
    }
    install.installed = true;
    components.forEach(component => {
        component.install(Vue);
    })
}

export default {
    version: "1.0.0",
    install
};
