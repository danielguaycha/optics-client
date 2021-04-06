import Vue from 'vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted, {
    theme: "toasted-primary",
    position: "bottom-right",
    duration: 3500,
    iconPack: 'mdi',
    className: "alert-family",
    closeOnSwipe: true
});

Vue.prototype.$alert = {
    error(message) {
        Vue.toasted.error(message, { icon: 'alert-circle' })
    },
    success(message) {
        Vue.toasted.success(message, { icon: 'check' })
    },
    warn(message) {
        Vue.toasted.show(message, {position:'bottom-center'})
    },
    info(message) {
        Vue.toasted.info(message, { icon: 'info' })
    }
};
